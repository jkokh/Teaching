<?php

function Teaching_webpush_response_content($params)
{
	Q_Response::addStylesheet('css/forms.css');
	Q_Response::addScript('js/pages/webpush.js');
	return Q::view('Teaching/content/webpush.php', compact('tabs', 'description'));
}

