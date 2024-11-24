document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can expand this)
    if (username && email && password) {
        // Simulate a successful sign-up process
        document.getElementById('message').innerText = 'Sign up successful! Welcome, ' + username + '!';
        
        // Clear the form
        document.getElementById('signupForm').reset();
    } else {
        document.getElementById('message').innerText = 'Please fill in all fields.';
    }
});