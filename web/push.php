<?php
include(dirname(__FILE__).DIRECTORY_SEPARATOR.'Q.inc.php');

if (!empty($_POST['title']) && !empty($_POST['message']) ) {
	$notification = [
		"alert" => [
			"title" => $_POST['title'],
			"body" => $_POST['message'],
		],
		"badge" => empty($_POST['badge']) ? null : $_POST['badge'],
		"icon" => empty($_POST['imageUrl']) ? null : $_POST['imageUrl'],
		"url" => empty($_POST['url']) ? null : $_POST['url']
	];
	$device = getAdapter();
	$device::$deviceId = $_POST['deviceId'];
	$device->handlePushNotification($notification);
	$device::sendPushNotifications();
}

function getAdapter() {
	$platform = Q_Request::browser();
	if (!$platform || Q_Request::isCordova()) {
		$platform = Q_Request::platform();
	}
	$className = "Users_Device_" . ucfirst($platform);
	$device = new $className();
	return $device;
}

print '{"success": "true"}';