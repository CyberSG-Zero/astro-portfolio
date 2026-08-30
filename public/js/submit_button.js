const submitButton = document.querySelector('button[type="submit"]');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const consentCheckbox = document.querySelector('input[name="consent"]');

const form = document.querySelector('.contact-form');


form.addEventListener('input', () => {
    if (nameInput.value.length > 0 && emailInput.value.length > 0 && messageInput.value.length > 0 && consentCheckbox.checked) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
});