export default function validateZipCode() {
    const zipCode = document.getElementById('zip-code');
    const zipCodeError = document.querySelector('#zip-code + span.error');

    zipCode.addEventListener('input', (event) => {
        if (zipCode.validity.valid) {
            zipCodeError.textContent = ''; // Clears error message if true
            zipCodeError.className = 'error'; // Removes the 'active' class
        } else {
            showZipCodeError();
        }
    });

    function showZipCodeError() {
        if (zipCode.validity.valueMissing) {
            // If field is blank.
            zipCodeError.textContent = 'Please enter a zip code.';
        } else if (zipCode.validity.patternMismatch) {
            // If input is not in email format.
            zipCodeError.textContent = 'Please enter in zip code format. E.g. 21755';
        }
        zipCodeError.className = 'error active';
    }
}