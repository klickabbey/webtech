document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const coffeeType = document.getElementById('coffeeType').value;
    const quantity = document.getElementById('quantity').value;
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;

    // Simulate a successful order process
    const totalCost = calculateTotalCost(coffeeType, quantity);
    document.getElementById('message').innerText = `Thank you, ${customerName}! Your order for ${quantity} ${coffeeType}(s) has been placed. Total cost: $${totalCost.toFixed(2)}`;
    
    // Clear the form
    document.getElementById('orderForm').reset();
});

// Function to calculate total cost based on coffee type and quantity
function calculateTotalCost(coffeeType, quantity) {
    const prices = {
        Espresso: 2.50,
        Cappuccino: 3.00,
        Latte: 3.50,
        Mocha: 3.75
    };

    return prices[coffeeType] * quantity;
}