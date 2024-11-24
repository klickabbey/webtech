document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (you can expand this)
    if (name && email && message) {
        // Simulate a successful message sending process
        document.getElementById('responseMessage').innerText = 'Thank you, ' + name + '! Your message has been sent successfully!';
        
        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('responseMessage').innerText = 'Please fill in all fields.';
    }
});