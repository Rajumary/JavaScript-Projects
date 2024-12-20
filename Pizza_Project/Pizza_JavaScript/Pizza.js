 // Initialize cart
 let cart = [];
 let totalPrice = 0;

 // Function to add items to cart
 function addToCart(name, price) {
     cart.push({ name, price });
     totalPrice += price;
     updateCart();
 }

 // Function to update cart display
 function updateCart() {
     const cartItemsList = document.getElementById('cartItems');
     const totalPriceElement = document.getElementById('totalPrice');

     // Clear current cart items
     cartItemsList.innerHTML = '';

     // Add each item to the cart list
     cart.forEach(item => {
         const li = document.createElement('li');
         li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
         cartItemsList.appendChild(li);
     });

     // Update total price
     totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
 }