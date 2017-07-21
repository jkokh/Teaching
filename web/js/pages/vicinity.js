Q.page("Teaching/vicinity", function () {
	Q.Places.loadGoogleMaps(function(){
		var panoramaOptions = {
			position: new google.maps.LatLng(40.579495, -73.971018),
			pov: {
				heading: 165,
				pitch: 0
			},
			zoom: 1
		};
		var myPano = new google.maps.StreetViewPanorama(
			document.getElementById('content_slot'),
			panoramaOptions
		);
		myPano.setVisible(true);
	});
});