function convertCurrency(amount, targetCurrency) {
    const conversionRates = {
        'USD': 3.5,
        'JOD': 5
    };

    if (conversionRates[targetCurrency]) {
        return amount / conversionRates[targetCurrency];
    } else {
        console.error('Target currency not supported');
        return null; 
    }
}

function convertAndDisplay() {
    const amount = document.getElementById('amount').value;
    const currency = document.querySelector('.currency').value;
    const resultContainer = document.getElementById('result');

    const convertedAmount = convertCurrency(amount, currency);
    if (convertedAmount !== null) {
        resultContainer.innerHTML = `${amount} NIS is equal to ${convertedAmount.toFixed(2)} ${currency}`;
    } else {
        resultContainer.innerHTML = 'Currency not supported.';
    }
}


