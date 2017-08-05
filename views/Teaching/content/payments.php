<div id='content'>
	<h1>Payments</h1>

<!--    <button id="pay">
        pay
    </button>-->

<?php echo Q::tool('Assets/payment', array('payments' => 'stripe', 'amount' => 10))?>
<?php echo Q::tool('Assets/payment', array('payments' => 'authnet', 'amount' => 10))?>


</div>
