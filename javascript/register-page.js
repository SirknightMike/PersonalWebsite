// Function to validate email format
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6; 
}

function handleSubmit(event) {
    event.preventDefault(); 

    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorDiv = document.getElementById('error-message');

    if (firstNameInput.value.trim() === '') {
        errorDiv.innerText = 'Please enter your first name';
        return;
    }

    if (lastNameInput.value.trim() === '') {
        errorDiv.innerText = 'Please enter your last name';
        return;
    }

    if (!validateEmail(emailInput.value)) {
        errorDiv.innerText = 'Invalid email address';
        return;
    }

    if (!validatePassword(passwordInput.value)) {
        errorDiv.innerText = 'Password should be at least 6 characters long';
        return;
    }
    event.target.submit();
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
});
