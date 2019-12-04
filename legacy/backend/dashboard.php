<?php
include 'db.php';

$sessionEmail = $_SESSION["email"];

if($conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)) {
	$loginQuery = $conn->prepare("SELECT * FROM `user` WHERE `email`='$sessionEmail'"); 
    $loginQuery->execute();
    $rowCount = $loginQuery->rowCount();
    
    $result = $loginQuery->setFetchMode(PDO::FETCH_ASSOC); 
    if($result && $rowCount > 0){
    	$dashboardData = $loginQuery->fetch(PDO::FETCH_ASSOC);
    } else {
    	echo false;
    }
}
?>