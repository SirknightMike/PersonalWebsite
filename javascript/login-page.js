// Function to validate email format
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to validate password strength (can be customized as needed)
function validatePassword(password) {
    console.log('validate password is working, ', password);
    return password.length >= 6; // Example: Password should be at least 6 characters long
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission by default

    // Fetch form elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorDiv = document.getElementById('error-message');

    // Validate email
    if (!validateEmail(emailInput.value)) {
        errorDiv.innerText = 'Invalid email address';
        return;
    }

    // Validate password
    if (!validatePassword(passwordInput.value)) {
        errorDiv.innerText = 'Password should be at least 6 characters long';
        console.log('password is not long enough')
        return;
    }

    // If validation passes, you can submit the form or perform other actions
    setTimeout(() => {
        output.textContent = "User successfully logged in";
      }, 1000);
    event.target.submit();
}

// Add event listener to form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
});