<?php
session_start();
include 'db.php';

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$password = $_POST['password'];
$company = '';
$phone = '';
$address = '';

if($conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)) {
    $loginQuery = $conn->prepare("SELECT * FROM `user` WHERE `email`='$email'"); 
    $loginQuery->execute();
    $rowCount = $loginQuery->rowCount();
    $result = $loginQuery->setFetchMode(PDO::FETCH_ASSOC); 
    if($result && $rowCount > 0){
        echo 'email_exists';
        echo false;
    } else {
        $registerQuery = "INSERT INTO `user` SET `firstname`='$firstname', `lastname`='$lastname', `email`='$email', `password`='$password', `company`='$company', `phone`='$phone', `address`='$address'";
        if($conn->exec($registerQuery)){
            $_SESSION["email"] = $email;
            $_SESSION["password"] = $password;
            echo true;
        } else {
            echo false;
        }
    }
}
?>