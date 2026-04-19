<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['error' => 'Missing fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['error' => 'Invalid email']);
    exit;
}

// Strip newlines to prevent header injection
$name = str_replace(["\r", "\n", "\t"], '', $name);
$email = str_replace(["\r", "\n", "\t"], '', $email);

$to = 'contact@shifa.uz';
$subject = '[SHIFA Contact] Message from ' . substr($name, 0, 60);
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

// Try PEAR Mail
$pear_available = @include_once 'Mail.php';
if ($pear_available) {
    $headers = [
        'From'         => 'noreply@shifa.uz',
        'Reply-To'     => $email,
        'To'           => $to,
        'Subject'      => $subject,
        'Content-Type' => 'text/plain; charset=UTF-8',
    ];
    $smtp = Mail::factory('smtp', ['host' => 'localhost', 'port' => 25]);
    $result = $smtp->send($to, $headers, $body);
    if ($result === true) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['error' => 'SMTP failed', 'debug' => $result->getMessage()]);
    }
    exit;
}

// Fallback: raw SMTP via fsockopen
$sent = smtp_send($to, 'noreply@shifa.uz', $subject, $body, $email);
if ($sent === true) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Send failed', 'debug' => $sent]);
}

function smtp_send($to, $from, $subject, $body, $reply_to) {
    $socket = @fsockopen('localhost', 25, $errno, $errstr, 10);
    if (!$socket) {
        $socket = @fsockopen('localhost', 587, $errno, $errstr, 10);
        if (!$socket) return "Cannot connect: $errstr ($errno)";
    }

    $res = smtp_read($socket);
    if (substr($res, 0, 3) !== '220') { fclose($socket); return "Bad greeting: $res"; }

    $hostname = gethostname() ?: 'shifa.uz';
    fwrite($socket, "EHLO $hostname\r\n");
    $res = smtp_read($socket);
    if (substr($res, 0, 3) !== '250') { fclose($socket); return "EHLO rejected: $res"; }

    fwrite($socket, "MAIL FROM:<$from>\r\n");
    $res = smtp_read($socket);
    if (substr($res, 0, 3) !== '250') { fclose($socket); return "MAIL FROM rejected: $res"; }

    fwrite($socket, "RCPT TO:<$to>\r\n");
    $res = smtp_read($socket);
    if (substr($res, 0, 3) !== '250') { fclose($socket); return "RCPT TO rejected: $res"; }

    fwrite($socket, "DATA\r\n");
    $res = smtp_read($socket);
    if (substr($res, 0, 3) !== '354') { fclose($socket); return "DATA rejected: $res"; }

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

    return (substr($res, 0, 3) === '250') ? true : "Not accepted: $res";
}

function smtp_read($socket) {
    $response = '';
    while (true) {
        $line = fgets($socket, 512);
        if ($line === false) break;
        $response = $line;
        // If 4th character is a space (not '-'), this is the last line
        if (isset($line[3]) && $line[3] !== '-') break;
    }
    return $response;
}
