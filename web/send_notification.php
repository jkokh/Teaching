<?php

if (!empty($_POST['title']) && !empty($_POST['message']) ) {
	$notification = [
		"alert" => [
			"title" => $_POST['title'],
			"body" => $_POST['message'],
		]
	];

	include(dirname(__FILE__).DIRECTORY_SEPARATOR.'Q.inc.php');

	$androidDevice = new Users_Device_Android();

	$androidDevice::$deviceId = $_POST['deviceId'];

	$androidDevice->handlePushNotification($notification);

	$androidDevice::sendPushNotifications();
}

print '{"success": "true"}';