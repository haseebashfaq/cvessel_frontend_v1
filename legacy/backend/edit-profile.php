<?php
session_start();
include 'db.php';

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_SESSION["email"];
$company = $_POST['company'];
$phone = $_POST['phone'];
$address = $_POST['address'];

if($conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)) {
    $loginQuery = $conn->prepare("SELECT * FROM `user` WHERE `email`='$email'"); 
    $loginQuery->execute();
    $rowCount = $loginQuery->rowCount();
    $result = $loginQuery->setFetchMode(PDO::FETCH_ASSOC); 
    if($result && $rowCount > 0){
        $updateProfileQuery = "UPDATE `user` SET `firstname`='$firstname', `lastname`='$lastname', `company`='$company', `phone`='$phone', `address`='$address' WHERE `email`='$email'";
        if ($conn->query($updateProfileQuery)) {
            echo 'true';
        } else {
            echo 'false';
        }
    } else {
        echo 'false';   
    }
}
?>