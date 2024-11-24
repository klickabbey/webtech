document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (password !== confirmPassword) {
        document.getElementById('message').innerText = 'Passwords do not match. Please try again.';
        return;
    }

    // Simulate a successful registration process
    document.getElementById('message').innerText = 'Registration successful! Welcome, ' + username + '!';
    
    // Clear the form
    document.getElementById('registrationForm').reset();
});