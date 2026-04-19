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

// Use PEAR Mail + Net_SMTP (installed on this server)
require_once 'Mail.php';

$to = 'contact@shifa.uz';
$subject = '[SHIFA Contact] Message from ' . substr($name, 0, 60);
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

$headers = [
    'From'         => 'noreply@shifa.uz',
    'Reply-To'     => $email,
    'To'           => $to,
    'Subject'      => $subject,
    'Content-Type' => 'text/plain; charset=UTF-8',
    'Date'         => date('r'),
];

$smtp = Mail::factory('smtp', [
    'host' => 'localhost',
    'port' => 25,
]);

$result = $smtp->send($to, $headers, $body);

if ($result === true) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send', 'debug' => $result->getMessage()]);
}
