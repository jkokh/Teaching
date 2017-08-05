<?php

function Teaching_androidpay_response_content() {
	Q_Response::addScript('js/pages/androidpay.js');
	return Q::view('Teaching/content/androidpay.php');
}