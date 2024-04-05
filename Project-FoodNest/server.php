<?php

$conn = new mysqli('localhost', 'root', 'Rohan@sql#123', 'foodtime');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {
    $loginUsername = sanitizeInput($_POST['loginUsername']);
    $loginPassword = sanitizeInput($_POST['loginPassword']);

    
}


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['signup'])) {
    $signupUsername = sanitizeInput($_POST['signUpUsername']);
    $signupEmail = sanitizeInput($_POST['signUpEmail']);
    $signupPassword = sanitizeInput($_POST['signUpPassword']); 
    $signupPhone = sanitizeInput($_POST['contactNumberSignUp']);
    $signupAgeGroup = sanitizeInput($_POST['ageGroupSignUp']);

    
    $hashedPassword = password_hash($signupPassword, PASSWORD_DEFAULT); 


    $stmt = $conn->prepare("INSERT INTO users (username, email, password, phone, ageGroup) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $signupUsername, $signupEmail, $hashedPassword, $signupPhone, $signupAgeGroup);

    
    $signupUsername = sanitizeInput($_POST['signUpUsername']);
    $signupEmail = sanitizeInput($_POST['signUpEmail']);
    $hashedPassword = password_hash(sanitizeInput($_POST['signUpPassword']), PASSWORD_DEFAULT);
    $signupPhone = sanitizeInput($_POST['contactNumberSignUp']);
    $signupAgeGroup = sanitizeInput($_POST['ageGroupSignUp']);

    if ($stmt->execute()) {
        echo "User successfully registered.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
