Q.page("Teaching/about", function () {

	var subscribed = false;
	var button = $('#butt');
	var info = $('#info');
	info.hide();

	Q.Users.Device.init(function(swRegistration, err){
		if (err) {
			button.text('Pushes are not supported');
			button.attr('disabled', true);
		} else {
			Q.Users.Device.subscribed(function(res){
				button.text(res ? 'Push unsubscribe' : 'Push subscribe');
				res ? info.show() : info.hide();
				subscribed = res;
			});
		}
	});

	window.action = function() {
		if (subscribed) {
			Q.Users.Device.unsubscribe(function(){
				button.text('Push subscribe');
				subscribed = false;
				info.hide();
			});
		} else {
			Q.Users.Device.subscribe(function(subscription){
				button.text('Push unsubscribe');
				subscribed = true;
				info.val(subscription);
				info.show();
			});
		}
	};

	window.subscribe = function() {
		Q.Users.Device.subscribe(function(registrationToken, err){
			if (err) {
				console.warn(err.message);
			} else {
				console.log("Successfully subscribed user with token: " + registrationToken);
			}
		});
	};

	window.check = function() {
		Q.Users.Device.subscribed(function(s){
			alert(s);
		});
	};

	window.unsubscribe = function() {
		Q.Users.Device.unsubscribe(function(s){
			if (s) {
				alert('unsubscribed');
			}
		});
	};

	return function () {
		// code to execute before page starts unloading
	};

}, 'Teaching');