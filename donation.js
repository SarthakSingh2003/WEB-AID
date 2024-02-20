// Initialize Google Pay API
const paymentsClient = new google.payments.api.PaymentsClient({
    environment: 'TEST', // Change to 'PRODUCTION' for production environment
    merchantInfo: {
        merchantId: 'YOUR_MERCHANT_ID',
        merchantName: 'Your Organization Name'
    },
    paymentDataRequest: {
        transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPrice: '10.00', // Donation amount
            currencyCode: 'USD' // Currency code
        },
        allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'],
        cardRequirements: {
            allowedCardNetworks: ['VISA', 'MASTERCARD'],
            billingAddressRequired: true,
            billingAddressFormat: 'FULL'
        }
    }
});

// Function to handle payment request
function onGooglePayButtonClick() {
    const paymentDataRequest = paymentsClient.createPaymentDataRequest();
    paymentsClient.loadPaymentData(paymentDataRequest)
        .then(function (paymentData) {
            // Handle successful payment
            console.log('Payment successful:', paymentData);
        })
        .catch(function (err) {
            // Handle errors
            console.error('Payment failed:', err);
        });
}

// Attach event listener to Google Pay button
document.getElementById('google-pay-button').addEventListener('click', onGooglePayButtonClick);
