document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can expand this)
    if (username === "user" && password === "password") {
        document.getElementById('message').innerText = 'Login successful! Welcome, ' + username + '!';
        // Here you can redirect or perform other actions
    } else {
        document.getElementById('message').innerText = 'Invalid username or password. Please try again.';
    }
});