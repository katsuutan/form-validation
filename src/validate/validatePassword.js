export default function validatePassword() {
    const password = document.getElementById('password');
    const passwordError = document.querySelector('#password + span.error');

    password.addEventListener('input', (event) => {
        if (password.validity.valid) {
            passwordError.textContent = ''; // Clears error message if true
            passwordError.className = 'error'; // Removes the 'active' class
        } else {
            showPasswordError();
        }
    });

    function showPasswordError() {
        if (password.validity.valueMissing) {
            // If field is blank.
            passwordError.textContent = 'Please enter a password.';
        } else if (password.validity.tooShort) {
            // If input is not in email format.
            passwordError.textContent = 'Password needs to be at least 8 characters.';
        }
        passwordError.className = 'error active';
    }
}