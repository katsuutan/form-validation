export default function validatePasswordConfirmation() {
    const confirm = document.getElementById('password-confirmation');
    const confirmError = document.querySelector('#password-confirmation + span.error');
    const password = document.getElementById('password');

    confirm.addEventListener('input', (event) => {
        showConfirmError();
        confirmError.className = 'error active';
        if (confirm.validity.valid) {
            confirmError.className = 'error'; // Removes the 'active' class
        } 
    });

    function showConfirmError() {
        if (confirm.validity.valueMissing) {
            // If field is blank.
            confirmError.textContent = 'Please re-enter your password.';
            confirm.setCustomValidity('Please re-enter your password.');
            confirmError.className = 'error active';
        } else if (confirm.value != password.value) {
            // If input is not in email format.
            confirmError.textContent = 'Password does not match.';
            confirm.setCustomValidity('Password does not match.');
            confirmError.className = 'error active';
        } else {
            confirmError.textContent = '';
            confirm.setCustomValidity('');
        }
    }
}