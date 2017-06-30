<?php
include(dirname(__FILE__).DIRECTORY_SEPARATOR.'Q.inc.php');

//$senderId = Q_Config::expect('Users', 'apps', 'android', 'Teaching', 'senderId');
$app = Q_Config::expect('Q', 'app');

// returns the requested URL:
$url = Q_Request::url();

// returns the base URL of your app,
// parent of the /css and other paths
$base_url = Q_Request::baseUrl();

// return value may end with "/index.php"
// depending on the web request
$controller_url = Q_Request::baseUrl(true);

// returns the $uri object obtained
// from routing the URL
$uri = Q_Dispatcher::uri();