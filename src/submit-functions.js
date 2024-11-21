export default function preventSubmit() {
    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
    });
}