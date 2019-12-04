<?php
session_start();
include 'db.php';

function callAPI($method, $url, $data){
   $curl = curl_init();
   switch ($method){
      case "POST":
         curl_setopt($curl, CURLOPT_POST, 1);
         if ($data)
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
         break;
      case "PUT":
         curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
         if ($data)
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);                         
         break;
      default:
         if ($data)
            $url = sprintf("%s?%s", $url, http_build_query($data));
   }
   // OPTIONS:
   curl_setopt($curl, CURLOPT_URL, $url);
   curl_setopt($curl, CURLOPT_HTTPHEADER, array(
      'APIKEY: 111111111111111111111',
      'Content-Type: application/json',
   ));
   curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
   curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
   // EXECUTE:
   $result = curl_exec($curl);
   if(!$result){die("Connection Failure");}
   curl_close($curl);
   return $result;
}







$vessel_obj = [];
$get_data = callAPI('GET', 'http://localhost/cvessel/backend/api/vessels.json', false);
$response = json_decode($get_data, true);
// $errors = $response['response']['errors'];
// $data = $response['response']['data'][0];

foreach ($response[0] as $key => $value) {
    $vessel_obj['mmsi'] = $value['MMSI'];
    $vessel_obj['vessel_name'] = $value['NAME'];
    $vessel_obj['imo'] = $value['IMO'];
    $vessel_obj['destination'] = $value['DESTINATION'];
}




// $firstname = $_POST['firstname'];
// $lastname = $_POST['lastname'];
// $email = $_SESSION["email"];
// $company = $_POST['company'];
// $phone = $_POST['phone'];
// $address = $_POST['address'];

// if($conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)) {
//     $loginQuery = $conn->prepare("SELECT * FROM `user` WHERE `email`='$email'"); 
//     $loginQuery->execute();
//     $rowCount = $loginQuery->rowCount();
//     $result = $loginQuery->setFetchMode(PDO::FETCH_ASSOC); 
//     if($result && $rowCount > 0){
//         $updateProfileQuery = "UPDATE `user` SET `firstname`='$firstname', `lastname`='$lastname', `company`='$company', `phone`='$phone', `address`='$address' WHERE `email`='$email'";
//         if ($conn->query($updateProfileQuery)) {
//             echo 'true';
//         } else {
//             echo 'false';
//         }
//     } else {
//         echo 'false';   
//     }
// }
?>