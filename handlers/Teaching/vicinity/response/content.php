<?php

function Teaching_vicinity_response_content() {
	Q_Response::addScript('js/pages/vicinity.js');
	return Q::view('Teaching/content/vicinity.php');
}