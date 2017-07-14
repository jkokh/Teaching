<?php
$file = "/path/to/some_file.zip";
header("Content-Type: application/zip");
header("Content-Length: " . filesize($file));

readfile($file);