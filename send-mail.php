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

// Check if mail() is available
if (!function_exists('mail')) {
    echo json_encode(['error' => 'mail() disabled', 'debug' => 'Function not available']);
    exit;
}

$to = 'contact@shifa.uz';
$subject = '[SHIFA Contact] Message from ' . substr($name, 0, 60);
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: noreply@shifa.uz\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

// Capture any error from mail()
$sent = false;
$mail_error = '';
set_error_handler(function($errno, $errstr) use (&$mail_error) {
    $mail_error = $errstr;
});
$sent = mail($to, $subject, $body, $headers);
restore_error_handler();

echo json_encode([
    'success' => $sent,
    'debug' => $sent ? 'mail accepted' : ($mail_error ?: 'mail returned false')
]);
