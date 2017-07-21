<?php
	
function Teaching_about_response_content()
{
	Q_Response::addScript('js/pages/about.js');
	Q_Response::addStylesheet('css/forms.css');
	return Q::view('Teaching/content/about.php');
}