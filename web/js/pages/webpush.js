Q.page("Teaching/webpush", function () {

	var button = $('button');
	var buttonText = button.text();

	setTimeout(function(){
		$("#deviceId").val(localStorage['Q	Users.Device.deviceId']);
	}, 1000);

	// code to execute after page finished loading
	window.sendNotification = function () {
		this.message = $("#message").val();
		this.title = $("#title").val();
		this.url = $("#url").val();
		this.badge = $("#badge").val();
		this.imageUrl = $("#imageUrl").val();
		this.deviceId = $("#deviceId").val();
		this.delay = parseInt($("#delay").val());
		if (!this.message || !this.title) {
			alert("Please enter the message and the title");
			$("#title").focus();
			return;
		}
		send.bind(this)();
		if (this.delay > 0) {
			this.interval = setInterval(send.bind(this), 1000);
		}
		button.prop( "disabled", true);
	};

	function send() {
		button.text('Sending... ' + (delay ? delay : ''));
		if (delay <= 0) {
			if (typeof interval !== 'undefined') {
				clearInterval(interval);
			}
			$.ajax({
				type: "POST",
				url: 'push.php',
				data: {message: message, title: title, url: url, badge: badge, imageUrl: imageUrl, deviceId: deviceId},
				success: function () {
					$("#message").val("");
					$("#title").val("");
					$("#url").val("");
					$("#badge").val("");
					$("#imageUrl").val("");
					button.text(buttonText);
					button.prop( "disabled", false);
				},
				dataType: 'json'
			});
		}
		delay--;
	}

}, 'Teaching');