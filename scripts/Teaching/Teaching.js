require('../Q.inc')(function (Q) {

	Q.plugins.Users.Device.SELECT('*').where({
		userId: ["dlykhemq", "pmazcsbq"]
	}).execute(function (err, devices) {
		if (err) {
			return callback(err);
		}
		devices.forEach(function (device, i) {
			var notification = {
				title: "Hello " + device["_fields"]["platform"],
				body: "From QBIX",
				icon: "https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/bell-512.png"
			};
			setTimeout(function(){
				device.handlePushNotification(notification, function (err, response) {
					if (err) {
						console.log("Something has gone wrong!");
					} else {
						console.log("Successfully sent with response: ", response);
					}
				});
			}, 3000 * i);

		});

	});

});