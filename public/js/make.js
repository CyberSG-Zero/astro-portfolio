document.addEventListener('DOMContentLoaded', function () {
const form = document.querySelector('.contact_form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    fetch(form.action, {
    method: 'POST',
    body: formData,
    })
    .then((response) => {
        if (response.ok) {
        window.location.href = './thank-you-page';
        } else {
        throw new Error('Form submission failed');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    })
    .finally(() => {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    });
});
});
