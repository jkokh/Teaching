<div id='content'>
	<h1>Vicinity</h1>
	<?= Q::tool('Q/expandable', array(
		'title' => 'expandable',
		'content' => str_repeat('blablabllasdf ', 200)
	), 'a')
	?>
	<?= Q::tool('Q/expandable', array(
		'title' => 'expandable1',
		'content' => str_repeat('blablabllasdf ', 200)
	), 'b')
	?>
</div>
