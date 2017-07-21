var apns = require("apns"), options, connection, notification;

options = {
	keyFile : "cert/ck.pem",
	certFile : "cert/Cert.pem",
	debug : true
};

connection = new apns.Connection(options);

notification = new apns.Notification();
notification.device = new apns.Device("201926A017B89E6E066E5975974F32025736B28EC6037F9F88B75EDCBA17C214");
notification.alert = "Hello World !";

connection.sendNotification(notification);
console.log('here')