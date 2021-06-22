<?php
// The message
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


// $msg = $_POST['fields.phoneNumber'];
$subject = $_POST;
$from = "netia-oferta.pl";


$headers = "MIME-Version: 1.0\r\n";
$headers.= "Content-type: text/html; charset=UTF-8\r\n";
$headers.= "From: <" . $from . ">";



// Send
// mail('piotr.sitarek.05@gmail.com', $subject, $message);

mail('kamil.papiez@netia-oferta.pl', $subject, "Proszę o kontakt.", $headers);
mail('jakubstodulski1996@gmail.com', $subject, "Proszę o kontakt.", $headers);
?>