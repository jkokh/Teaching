<div id='dashboard'>
	<h1><?php echo Users::communityName() ?></h1>

	<div id="dashboard_user">
		<?php if ($user): ?>
			<?php echo Q::tool("Users/avatar", array('userId' => $user->id, 'icon' => 50, 'short' => true), 'dashboard') ?>
		<?php else: ?>
			<a href="#login" class="Teaching_login">log in</a>
		<?php endif; ?>
		<div id="dashboard_user_contextual" class="Q_contextual" data-handler="Teaching.userContextual">
			<ul class="Q_listing">
				<?php if ($user): ?>
					<?php if (!$user->mobileNumber): ?>
						<li data-action="setIdentifier">set mobile number</li>
					<?php elseif (!$user->emailAddress): ?>
						<li data-action="setIdentifier">set email address</li>
					<?php endif ?>
				<?php endif ?>
				<li data-action="logout">log out</li>
			</ul>
		</div>
	</div>

	<?php echo Q::tool('Q/tabs', array(
		'vertical' => !Q_Request::isMobile(),
		'overflow' => array(
			'content' => '{{html}}'
		),
		'compact' => true,
		'tabs' => array(
			'welcome' => 'Welcome',
			'about' => 'About',
			'webpush' => 'Web Push',
			'payments' => 'Payments',
			'androidpay' => 'Android Pay'
		),
		'urls' => array(
			'welcome' => 'Teaching/welcome',
			'about' => 'Teaching/about',
			'messaging' => 'Teaching/messaging',
			'webpush' => 'Teaching/webpush',
			'payments' => 'Teaching/payments',
			'androidpay' => 'Teaching/androidpay'
		)
	))?>
</div>
