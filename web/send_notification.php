<?php
if (empty($_POST) || !sizeof($_POST)) {
	exit;
}

#API access key from Google API's Console
define( 'API_ACCESS_KEY', 'AAAAFT4yjMY:APA91bEQgTjnBAq0L4LzsawLgslhAWvl-LRc_qqIhPLKG5WwqXBZoROGa-EwAgrP6BUdV2gWJ833trTEbp0CsAgmNRI09YFTnQTFld96sBCqsrHRVIVynM5vnAgsZX2iPwQLT2ArBEMW' );
$registrationIds = $_POST['deviceId'];
#prep the bundle
$msg = array
(
	'body' 	=> $_POST['message'],
	'title'	=> 'Title Of Notification',
	'icon'	=> 'myicon',/*Default Icon*/
	'sound' => 'mySound'/*Default sound*/
);
$fields = array
(
	'to'		=> $registrationIds,
	'notification'	=> $msg
);

$headers = array
(
	'Authorization: key=' . API_ACCESS_KEY,
	'Content-Type: application/json'
);
var_dump($headers);
#Send Reponse To FireBase Server
$ch = curl_init();
curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
curl_setopt( $ch,CURLOPT_POST, true );
curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
$result = curl_exec($ch );
curl_close( $ch );
#Echo Result Of FireBase Server
echo json_encode($result);