<?php
ini_set('display_errors', 0);
error_reporting(0);
header('Content-Type: application/json');

// Reject oversized payloads early (max ~10KB for a contact form)
if (isset($_SERVER['CONTENT_LENGTH']) && (int)$_SERVER['CONTENT_LENGTH'] > 10240) {
    http_response_code(413);
    echo json_encode(['error' => 'Payload too large']);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Origin / Referer check — reject requests from foreign domains
$allowed_origins = ['https://shifa.uz', 'https://www.shifa.uz', 'http://localhost:8000'];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';

$origin_valid = in_array($origin, $allowed_origins, true);
$referer_valid = false;
foreach ($allowed_origins as $allowed) {
    if (strpos($referer, $allowed) === 0) {
        $referer_valid = true;
        break;
    }
}

if (!$origin_valid && !$referer_valid) {
    http_response_code(403);
    echo json_encode(['error' => 'Forbidden']);
    exit;
}

// Rate limiting — max 5 submissions per IP per hour
$rate_limit_dir = __DIR__ . '/.rate_limits';
if (!is_dir($rate_limit_dir)) {
    @mkdir($rate_limit_dir, 0700, true);
}

// Resolve real client IP (supports reverse proxies)
$ip = $_SERVER['REMOTE_ADDR'];
$trusted_proxies = ['127.0.0.1', '::1'];
if (in_array($ip, $trusted_proxies, true) && !empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $forwarded = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
    $candidate = trim($forwarded[0]);
    if (filter_var($candidate, FILTER_VALIDATE_IP)) {
        $ip = $candidate;
    }
}

$ip_hash = hash('sha256', $ip . 'shifa-salt-x9k2m');
$rate_file = $rate_limit_dir . '/' . $ip_hash;
$max_requests = 5;
$window = 3600;

$attempts = [];
if (file_exists($rate_file)) {
    $attempts = json_decode(file_get_contents($rate_file), true);
    if (!is_array($attempts)) $attempts = [];
    $cutoff_time = time() - $window;
    $attempts = array_filter($attempts, function($ts) use ($cutoff_time) {
        return $ts > $cutoff_time;
    });
}

// Bypass rate limiting for admin testing
$bypass_email = isset($_POST['email']) ? trim($_POST['email']) : '';
$rate_exempt = ($bypass_email === 'sheroziy@shifa.uz');
if ($rate_exempt && file_exists($rate_file)) {
    @unlink($rate_file);
    $attempts = [];
}

if (!$rate_exempt && count($attempts) >= $max_requests) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests. Try again later.']);
    exit;
}

// Count this attempt immediately to rate-limit invalid requests too
if (!$rate_exempt) {
    $attempts[] = time();
    @file_put_contents($rate_file, json_encode(array_values($attempts)), LOCK_EX);
}

// Cleanup: remove stale rate limit files (1-in-50 chance per request)
if (rand(1, 50) === 1) {
    $cutoff = time() - 7200;
    foreach (glob($rate_limit_dir . '/*') as $f) {
        if (is_file($f) && filemtime($f) < $cutoff) {
            @unlink($f);
        }
    }
}

// Honeypot — if the hidden field has content, it's a bot
$honeypot = isset($_POST['company_url']) ? $_POST['company_url'] : '';
if (!empty($honeypot)) {
    echo json_encode(['success' => true]);
    exit;
}

// Reject if any unexpected fields are present (form stuffing)
$allowed_fields = ['name', 'email', 'message', 'company_url', '_t'];
$extra_fields = array_diff(array_keys($_POST), $allowed_fields);
if (!empty($extra_fields)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

// Timing check — reject submissions faster than 3 seconds (bots)
$form_loaded = isset($_POST['_t']) ? (int)$_POST['_t'] : 0;
if ($form_loaded > 0 && (time() - $form_loaded) < 3) {
    echo json_encode(['success' => true]);
    exit;
}

// Input validation with length limits
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required']);
    exit;
}

if (mb_strlen($name) > 100) {
    http_response_code(400);
    echo json_encode(['error' => 'Name is too long']);
    exit;
}

if (mb_strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

if (mb_strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode(['error' => 'Message is too long']);
    exit;
}

// Strip newlines to prevent header injection
$name = str_replace(["\r", "\n", "\t"], '', $name);
$email = str_replace(["\r", "\n", "\t"], '', $email);

// Build and send email via SMTP
$to = 'contact@shifa.uz';
$subject = '[SHIFA Contact] Message from ' . mb_substr($name, 0, 60);
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

$sent = smtp_send($to, 'noreply@shifa.uz', $subject, $body, $email);

if ($sent === true) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send']);
}


/* ── SMTP Transport ── */

function smtp_send($to, $from, $subject, $body, $reply_to) {
    $socket = @fsockopen('localhost', 25, $errno, $errstr, 10);
    if (!$socket) {
        $socket = @fsockopen('localhost', 587, $errno, $errstr, 10);
        if (!$socket) return false;
    }

    $res = smtp_read($socket);
    if (substr($res, 0, 3) !== '220') { fclose($socket); return false; }

    $hostname = gethostname() ?: 'shifa.uz';
    fwrite($socket, "EHLO $hostname\r\n");
    $res = smtp_read($socket);
    if (substr($res, 0, 3) !== '250') { fclose($socket); return false; }

    fwrite($socket, "MAIL FROM:<$from>\r\n");
    $res = smtp_read($socket);
    if (substr($res, 0, 3) !== '250') { fclose($socket); return false; }

    fwrite($socket, "RCPT TO:<$to>\r\n");
    $res = smtp_read($socket);
    if (substr($res, 0, 3) !== '250') { fclose($socket); return false; }

    fwrite($socket, "DATA\r\n");
    $res = smtp_read($socket);
    if (substr($res, 0, 3) !== '354') { fclose($socket); return false; }

    $msg = "From: $from\r\n";
    $msg .= "Reply-To: $reply_to\r\n";
    $msg .= "To: $to\r\n";
    $msg .= "Subject: $subject\r\n";
    $msg .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $msg .= "Date: " . date('r') . "\r\n";
    $msg .= "\r\n";
    $msg .= str_replace("\n.", "\n..", $body);
    $msg .= "\r\n.\r\n";

    fwrite($socket, $msg);
    $res = smtp_read($socket);
    fwrite($socket, "QUIT\r\n");
    fclose($socket);

    return (substr($res, 0, 3) === '250') ? true : false;
}

function smtp_read($socket) {
    $response = '';
    while (true) {
        $line = fgets($socket, 512);
        if ($line === false) break;
        $response = $line;
        if (isset($line[3]) && $line[3] !== '-') break;
    }
    return $response;
}
