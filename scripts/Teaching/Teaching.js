var http = require('http');
require('../Q.inc')(function(Q) {
	
	Q.plugins.Users.listen();
	Q.plugins.Streams.listen();
	
	// TODO: Make some classes in classes/Teaching and then require() them

	var Db = require('Db');

	// get community name
	var commutiny = Q.plugins.Users.communityName();

	// get user from session
	//Q.plugins.Users.userFromSession('zzzbuyuI5FSVSGKEuOYID6mC16jZledCtSVtFSDc5mMi0zc', function(user) {
	//	console.log('here');
	//});



	Q.plugins.Users.Device.SELECT('*').where({
	}).execute(function (err, devices) {
		if (err) {
			return callback(err);
		}
		Q.each(devices, function (i) {
			if (filter && filter(this) === false) {
				return;
			}
			this.pushNotification(
				isArrayLike ? notifications[this.fields.userId] : notifications,
				options
			);
		});

	});


	var connection = Db.getConnection("Teaching");
	//var row = Db.Row('id');

	//Db.
	Db.on('query', function (query, sql, client) {
		if (query.clauses.BEGIN) {
			Q.log('BEGIN', 'sql');
		}
		Q.log(sql, 'sql');
		if (query.clauses.COMMIT) {
			Q.log('COMMIT', 'sql');
		}
		if (query.clauses.ROLLBACK) {
			Q.log('ROLLBACK', 'sql');
		}
	});
	
});