// Sticky Navigation
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};

// Close Navbar on Click (for mobile devices)
let navbar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navcollapse.classList.remove('show');
    });
});

// Counter Design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});

// Add Food to Cart
let cart = []; // This will store the added food items

// Function to add food to the cart
function addToCart(foodItem) {
    // Check if the food is already in the cart
    const existingFoodIndex = cart.findIndex(item => item.id === foodItem.id);

    if (existingFoodIndex !== -1) {
        // If the item is already in the cart, increase the quantity
        cart[existingFoodIndex].quantity++;
    } else {
        // Otherwise, add a new item to the cart
        foodItem.quantity = 1;
        cart.push(foodItem);
    }

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    let cartDisplay = document.getElementById("cart-display"); // Make sure to have a div with id 'cart-display'
    cartDisplay.innerHTML = ""; // Clear the previous cart display

    cart.forEach(item => {
        cartDisplay.innerHTML += `<div class="cart-item">
            <p>${item.name} (x${item.quantity})</p>
            <span>₹${item.price * item.quantity}</span>
        </div>`;
    });

    // Display total price
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    cartDisplay.innerHTML += `<div class="cart-total">
        <h4>Total: ₹${total}</h4>
        <button id="checkout-btn" class="main-btn">Checkout</button>
    </div>`;
}

// Example of adding food items (these IDs should match the data for each food item)
document.querySelector("#food1").addEventListener("click", function() {
    addToCart({
        id: 1,
        name: "South Indian Dosa",
        price: 100
    });
});

document.querySelector("#food2").addEventListener("click", function() {
    addToCart({
        id: 2,
        name: "Vegetarian Thali",
        price: 200
    });
});

// Additional functionality: Checkout button functionality
document.querySelector("#cart-display").addEventListener("click", function(e) {
    if (e.target && e.target.id === "checkout-btn") {
        alert("Proceeding to checkout with " + cart.length + " items.");
        // Implement the checkout logic here
    }
});
