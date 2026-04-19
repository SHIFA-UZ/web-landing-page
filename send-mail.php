<?php
header('Content-Type: application/json');

// Step 1: Can we even respond?
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Step 2: Can we read POST data?
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['error' => 'Missing fields', 'got' => array_keys($_POST)]);
    exit;
}

// Step 3: Can we send mail?
$to = 'contact@shifa.uz';
$subject = '[SHIFA Contact] Message from ' . substr($name, 0, 60);
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: noreply@shifa.uz\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

$sent = mail($to, $subject, $body, $headers);

echo json_encode(['success' => $sent, 'debug' => $sent ? 'mail accepted' : 'mail rejected by server']);
