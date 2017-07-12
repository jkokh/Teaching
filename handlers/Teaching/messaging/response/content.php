<?php

function Teaching_messaging_response_content($params)
{
	Q_Response::addScript('js/pages/messaging.js');
	Q_Response::addStylesheet('css/forms.css');
	return Q::view('Teaching/content/messaging.php', compact('tabs', 'description'));
}

