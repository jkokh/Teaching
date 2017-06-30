Q.page("Teaching/messaging", function () {
	var deviceId = localStorage['Q	Users.Device.deviceId'];
	$("#deviceId").val(deviceId);
	console.log(deviceId);


	// code to execute after page finished loading
	window.sendNotification = function () {
		var message = $("#message").val();
		if (!message) {
			alert("Please enter the message");
			$("#message").focus();
		}
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: 'send_notification.php',
			data: {message: message, deviceId: deviceId},
			success: success,
			dataType: 'json'
		});
		return false;

	};

	function success() {
		alert('data were sent');
	}

	return function () {
		// code to execute before page starts unloading
	};

}, 'Teaching');