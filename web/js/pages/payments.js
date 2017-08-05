Q.page("Teaching/payments", function () {


/*
	var stripe = Stripe('pk_test_sAgL8NxYbKg4YKGBm1FM5rdF');

	Q.Assets.Payments.stripe({
		amount: 10
	});
*/


	/*window.pay = function () {
		console.log(window.PaymentRequest)
		Q.Assets.Payments.pay()
	};

	function onBuyClicked() {
		// Supported payment methods
		var supportedInstruments = [{
			supportedMethods: ['visa'],
			data: {
				supportedNetworks: [
					'visa', 'mastercard', 'amex', 'discover',
					'diners', 'jcb', 'unionpay'
				]
			}
		}];


		// Checkout details
		var details = {
			displayItems: [{
				label: 'Original donation amount',
				amount: {currency: 'USD', value: '65.00'}
			}, {
				label: 'Friends and family discount',
				amount: {currency: 'USD', value: '-10.00'}
			}],
			total: {
				label: 'Total due',
				amount: {currency: 'USD', value: '55.00'}
			}
		};

		var request = new PaymentRequest(supportedInstruments, details);

		request.show().then(function (result) {
			// POST the payment information to the server
			return fetch('/pay', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(result.toJSON())
			}).then(function () {
				// 4. Display payment results
				if (response.status === 200) {
					// Payment successful
					return result.complete('success');
				} else {
					// Payment failure
					return result.complete('fail');
				}
			}).catch(function () {
				return result.complete('fail');
			});
		});


	}
	document.querySelector('#pay').addEventListener('click', onBuyClicked);
*/
	return function () {
		// code to execute before page starts unloading
	};

}, 'Teaching');


function submit(form) {
	// remove the input field names for security
	// we do this *before* anything else which might throw an exception
	removeInputNames(); // THIS IS IMPORTANT!
	// given a valid form, submit the payment details to stripe
	$(form['submit-button']).attr("disabled", "disabled")
	Stripe.createToken({
		number: $('.card-number').val(),
		cvc: $('.card-cvc').val(),
		exp_month: $('.card-expiry-month').val(),
		exp_year: $('.card-expiry-year').val()
	}, function(status, response) {
		if (response.error) {
			// re-enable the submit button
			$(form['submit-button']).removeAttr("disabled")

			// show the error
			$(".payment-errors").html(response.error.message);
			// we add these names back in so we can revalidate properly
			addInputNames();
		} else {
			// token contains id, last4, and card type
			var token = response['id'];
			// insert the stripe token
			var input = $("<input name='stripeToken' value='" + token + "' style='display:none;' />");
			form.appendChild(input[0])
			// and submit
			form.submit();
		}
	});

	return false;
}