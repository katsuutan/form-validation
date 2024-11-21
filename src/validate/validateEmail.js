export default function validateEmail() {
    const email = document.getElementById('mail');
    const emailError = document.querySelector('#mail + span.error');

    email.addEventListener('input', (event) => {
        if (email.validity.valid) {
            emailError.textContent = ''; // Clears error message if true
            emailError.className = 'error'; // Removes the 'active' class
        } else {
            showEmailError();
        }
    });

    function showEmailError() {
        if (email.validity.valueMissing) {
            // If field is blank.
            emailError.textContent = 'Please enter an email address.';
        } else if (email.validity.typeMismatch) {
            // If input is not in email format.
            emailError.textContent = 'Please enter in email format. E.g. johndoe@email.com';
        }
        emailError.className = 'error active';
    }
}