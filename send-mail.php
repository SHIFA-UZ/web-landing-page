<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Just echo what we received — no mail, no filesystem
echo json_encode([
    'success' => true,
    'received' => [
        'name' => $_POST['name'] ?? 'MISSING',
        'email' => $_POST['email'] ?? 'MISSING',
        'message' => $_POST['message'] ?? 'MISSING',
    ],
    'php' => PHP_VERSION
]);
