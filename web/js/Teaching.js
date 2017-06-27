if (!window.Q) { // You can remove this part after you've run install.php
	document.getElementsByTagName('body')[0].innerHTML = "<h1>Please run Teaching/scripts/Q/install.php --all</h1>";
	throw "Q is not defined";
}

var Teaching = (function (Q, $) {
	
	// Here is some example code to get you started
	
	var Teaching = {
		userContextual: function (item) {
			var action = $(item).attr('data-action');
			if (Teaching.actions[action]) {
				Q.handle(Teaching.actions[action], Teaching, [item]);
			}
		},
		actions: {
			logout: Q.Users.logout,
			setIdentifier: Q.Users.setIdentifier
		}
	};
	
	// The following code is for all pages.
	// For specific pages, see web/js/pages directory. 
	Q.page('', function () {
		
		$('.Teaching_login').on(Q.Pointer.click, function () {
			Q.Users.login();
			return false;
		});
		
		Q.addScript("plugins/Q/js/QTools.js", function () {
			var $avatar = $('#dashboard .Users_avatar_tool');
			if ($avatar.length) {
				Q.Contextual.add($avatar, $('#dashboard_user_contextual'));	
			}
		});
		
		// For example, we can hide notices when the user clicks/taps on them
		$('#notices li').on(Q.Pointer.fastclick, true, function () {
			var $this = $(this), key;
			$this.css('min-height', 0)
			.slideUp(300, function () {
				$(this).remove();
				if (!$('#notices li').length) {
					$('#notices_slot').empty();
				}
				Q.layout();
			});
			if (key = $this.attr('data-key')) {
				Q.req('Q/notice', 'data', null, { 
					method: 'delete', 
					fields: {key: key} 
				});
			}
		}).css('cursor', 'pointer');
		
	}, 'Teaching');
	
	// example stream
	Q.Streams.define("Teaching/cool", "js/streams/cool.js");
	
	// example tool
	Q.Tool.define("Teaching/cool", "js/tools/cool.js");

	// tell Q.handle to load pages using AJAX - much smoother
	Q.handle.options.loadUsingAjax = true;
	
	// make the app feel more native on touch devices
	Q.Pointer.preventRubberBand({
		direction: 'vertical'
	});
	Q.Pointer.startBlurringOnTouch();
	
	// set some options
	if (Q.info.isTouchscreen) {
		Q.Tool.jQuery.options("Q/clickable", {
			press: { size: 1.5 },
			release: { size: 3 },
			shadow: null
		});
	}
	
	return Teaching;
	
})(Q, jQuery);