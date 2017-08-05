<?php

function Teaching_payments_response_content() {
	Q_Response::addScript('js/pages/payments.js');
	Q_Response::addScript('https://js.stripe.com/v3/');
	return Q::view('Teaching/content/payments.php');
}

