Q.page("Teaching/messaging", function () {

	var deviceId = localStorage['Q	Users.Device.deviceId'];
	$("#deviceId").val(deviceId);

	// code to execute after page finished loading
	window.sendNotification = function () {
		var message = $("#message").val();
		var title = $("#title").val();
		deviceId = $("#deviceId").val();
		if (!message || !title) {
			alert("Please enter the message and the title");
			$("#message").focus();
		}
		$.ajax({
			type: "POST",
			url: 'send_notification.php',
			data: {message: message, title: title, deviceId: deviceId},
			success: function () {
				$("#message").val("");
				$("#title").val("");
				console.log('Data have been sent')
			},
			dataType: 'json'
		});
		return false;

	};


	return function () {
		// code to execute before page starts unloading
	};

}, 'Teaching');