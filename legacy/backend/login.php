<?php
session_start();
include 'db.php';

$email = $_POST['email'];
$password = $_POST['password'];

if($conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)) {
	$loginQuery = $conn->prepare("SELECT * FROM `user` WHERE `email`='$email' && `password`='$password'"); 
    $loginQuery->execute();
    $rowCount = $loginQuery->rowCount();
    
    $result = $loginQuery->setFetchMode(PDO::FETCH_ASSOC); 
    if($result && $rowCount > 0){
    	$_SESSION["email"] = $email;
    	$_SESSION["password"] = $password;
    	echo true;
    } else {
    	echo false;
    }
}
?>