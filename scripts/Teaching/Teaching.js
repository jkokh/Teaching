require('../Q.inc')(function (Q) {

	Q.plugins.Users.Device.SELECT('*').where({
		userId: ["vneceymh", "timvukno", "eralrzkp"]
	}).execute(function (err, devices) {
		if (err) {
			return callback(err);
		}
		devices.forEach(function (device, i) {
			var notification = {
				alert: {
					title: 'Hello ' + device.fields.platform,
					body: 'from Qbix'
				},
				badge: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-128.png',
				url: 'https://google.com'
			};
			setTimeout(function () {
				device.handlePushNotification(notification, function (err, response) {
					if (err) {
						console.log("Something has gone wrong!");
					} else {
						console.log("Successfully sent with response: ", response);
					}
				});
			}, i * 3000);
		});

	});

});