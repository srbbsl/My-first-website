//Shopping cart
/*Create an array of objects where each object represents an item in a shopping cart.
Each item should have properties like priductName, quantity, and pricePerUnit.
Write a function that calculates the total cost of the items in the cart. */

const cartItems = [
    {
        productName: "Laptop",
        quantity: 10,
        pricePerUnit: 100000,
    },
    {
        productName: "Mobile",
        quantity: 5,
        pricePerUnit: 50000,
    }
];

function calculateTotalCost () {
    let totalCost = 0;
    cartItems.forEach((item) => {
        totalCost = totalCost + item.quantity * item.pricePerUnit;
    }); 

    /*
    iteration 1: cartItem = laptop, 10, 100000; totalCost = 1000000
    iteration 2: cartItem = mobile, 5, 50000; totalCost = 1000000 + 250000
    */
    
    console.log("The total cost of the cart item is: ", totalCost);
}

calculateTotalCost();
