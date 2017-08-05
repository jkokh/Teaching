Q.page("Teaching/androidpay", function () {

    console.log('This is android pay');

    window.onBuyClicked = function() {
        alert('clicked');
        const ANDROID_PAY = 'https://android.com/pay';

        if (!window.PaymentRequest) {
            console.log('PaymentRequest API is not available.')
            return;
        }

        var supportedInstruments = [
            {
                supportedMethods: ['basic-card'],
                data: {
                    supportedNetworks: ['amex', 'discover', 'mastercard', 'visa'],
                    supportedTypes: ['credit']
                }
            },
            {
                supportedMethods: [ANDROID_PAY],
                data: {
                    merchantId: '02510116604241796260',
                    environment: 'TEST',
                    allowedCardNetwork: ['AMEX', 'MASTERCARD', 'VISA', 'DISCOVER'],
                    paymentMethodTokenizationParameters: {
                        tokenizationType: 'GATEWAY_TOKEN',
                        parameters: {
                            'gateway': 'stripe',
                            'stripe:publishableKey': 'pk_live_fD7ggZCtrB0vJNApRX5TyJ9T',
                            'stripe:version': '2016-07-06'
                        }
                    }
                }
            }
        ];

        var details = {
            displayItems: [{
                label: 'Original donation amount',
                amount: {currency: 'USD', value: '0.01'}
            }],
            total: {
                label: 'Total due',
                amount: {currency: 'USD', value: '0.01'}
            }
        };

        var options = {
            requestPayerName: true
        };

        // Initialization
        var request = new PaymentRequest(supportedInstruments, details, options);

        // When user selects a shipping address
        request.addEventListener('shippingaddresschange', function (e) {
            e.updateWith((function (details, addr) {
                    var shippingOption = {
                        id: '',
                        label: '',
                        amount: {currency: 'USD', value: '0.00'},
                        selected: true
                    };
                    // Shipping to US is supported
                    if (addr.country === 'US') {
                        shippingOption.id = 'us';
                        shippingOption.label = 'Standard shipping in US';
                        shippingOption.amount.value = '0.00';
                        details.total.amount.value = '0.00';
                        // Shipping to JP is supported
                    } else if (addr.country === 'JP') {
                        shippingOption.id = 'jp';
                        shippingOption.label = 'International shipping';
                        shippingOption.amount.value = '0.00';
                        details.total.amount.value = '0.00';
                        // Shipping to elsewhere is unsupported
                    } else {
                        // Empty array indicates rejection of the address
                        details.shippingOptions = [];
                        return Promise.resolve(details);
                    }
                    // Hardcode for simplicity
                    if (details.displayItems.length === 2) {
                        details.displayItems[2] = shippingOption;
                    } else {
                        details.displayItems.push(shippingOption);
                    }
                    details.shippingOptions = [shippingOption];

                    return Promise.resolve(details);
                })
                (details, request.shippingAddress)
            );
        });

        // When user selects a shipping option
        request.addEventListener('shippingoptionchange', function (e) {
            e.updateWith((function (details) {
                    // There should be only one option. Do nothing.
                    return Promise.resolve(details);
                })
                (details)
            );
        });

        // Show UI then continue with user payment info
        request.show().then(function (result) {
            alert(JSON.stringify(result));
            // POST the result to the server
            return fetch('/pay', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(result.toJSON())
            }).then(function (res) {
                // Only if successful
                if (res.status === 200
                ) {
                    return res.json();
                }
                else {
                    throw 'Failure';
                }
            }).then(function (response) {
                // You should have received a JSON object
                if (response.success === true) {
                    return result.complete('success');
                } else {
                    return result.complete('fail');
                }
            }).then(function () {
                console.log('Thank you!',
                    result.shippingAddress.toJSON(),
                    result.methodName,
                    result.details.toJSON());
            }).catch(function () {
                return result.complete('fail');
            });
        }).catch(function (err) {
            console.error('Uh oh, something bad happened: ' + err.message);
        });
    }


    return function () {
        // code to execute before page starts unloading
    };

}, 'Teaching');





