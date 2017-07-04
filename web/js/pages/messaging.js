Q.page("Teaching/messaging", function () {
	var deviceId = localStorage['Q	Users.Device.deviceId'];
	$("#deviceId").val(deviceId);
	console.log(deviceId);

	// code to execute after page finished loading
	window.sendNotification = function () {
		var message = $("#message").val();
		var title = $("#title").val();
		if (!message || !title) {
			alert("Please enter the message and the title");
			$("#message").focus();
		}
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: 'send_notification.php',
			data: {message: message, title: title, deviceId: deviceId},
			success: function() {
				$("#message").val("");
				$("#title").val("");
				alert('data were sent');
			},
			dataType: 'json'
		});
		return false;

	};



	return function () {
		// code to execute before page starts unloading
	};

}, 'Teaching');