require('../Q.inc')(function (Q) {

	Q.plugins.Users.Device.SELECT('*').execute(function (err, devices) {
		if (err) {
			return callback(err);
		}
		devices.forEach(function (device, i) {
			var notification = {
				alert: {
					title: "Hello " + device["_fields"]["platform"],
					body: "testing message"
				},
				icon: "https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/bell-512.png",
				url: "https://yandex.ru"
			};
			setTimeout(function(){
				device.handlePushNotification(notification, function (err) {

				});
			}, 3000 * i);

		});

	});

});