
// Get cart data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Product images
function getProductImage(name) {

    if (name == "Perler Beads") {
        return "perler.jpg";
    }
    else if (name == "Crochet") {
        return "crochet.jpg";
    }
    else if (name == "Puzzle") {
        return "puzzle.png";
    }
    else if (name == "Pipe Cleaner Crafts") {
        return "pipecleaner.jpg";
    }

    return "";
}

// Add product to cart
function addToCart(name, price, qtyId) {

    let quantity = 1;

    if (qtyId) {
        quantity = parseInt(document.getElementById(qtyId).value);

        if (isNaN(quantity) || quantity < 1) {
            alert("Please enter a valid quantity!");
            return;
        }
    }

    let found = false;

    for (let i = 0; i < cart.length; i++) {

        if (cart[i].name == name) {
            cart[i].quantity += quantity;
            found = true;
            break;
        }
    }

    if (found == false) {

        let product = {
            name: name,
            price: price,
            quantity: quantity
        };

        cart.push(product);
    }

    // Save cart data
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart successfully!");

}

// Display cart products
function displayCart() {

    let cartItems = document.getElementById("cart-items");

    if (cartItems == null) {
        return;
    }

    cartItems.innerHTML = "";

    if (cart.length == 0) {

        cartItems.innerHTML = "<p>Your shopping cart is empty.</p>";

        updateTotal();
        return;
    }

    for (let i = 0; i < cart.length; i++) {

        let item = cart[i];

        cartItems.innerHTML += `
            <div class="cart-item">

                <img src="${getProductImage(item.name)}"
                alt="${item.name}"
                width="100">

                <div>
                    <h3>${item.name}</h3>
                    <p>RM ${item.price.toFixed(2)}</p>

                    <label>Quantity:</label>

                    <input type="number"
                    value="${item.quantity}"
                    min="1"
                    onchange="updateQuantity(${i}, this.value)">

                    <button onclick="removeFromCart(${i})">
                        Remove
                    </button>
                </div>

                <p>
                    RM ${(item.price * item.quantity).toFixed(2)}
                </p>

            </div>
        `;
    }

    updateTotal();
}

// Update product quantity
function updateQuantity(index, quantity) {

    quantity = parseInt(quantity);

    if (isNaN(quantity) || quantity < 1) {

        alert("Please enter a valid quantity!");
        displayCart();
        return;
    }

    cart[index].quantity = quantity;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// Remove product from cart
function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

// Calculate total price
function updateTotal() {

    let subtotal = 0;

    for (let i = 0; i < cart.length; i++) {

        subtotal += cart[i].price * cart[i].quantity;
    }

    let shipping = 0;

    let total = subtotal + shipping;

    document.getElementById("subtotal").innerHTML =
    subtotal.toFixed(2);

    document.getElementById("shipping").innerHTML =
    shipping.toFixed(2);

    document.getElementById("total").innerHTML =
    total.toFixed(2);

}

// Checkout
function checkout() {

    if (cart.length == 0) {

        alert("Your shopping cart is empty!");
        return;
    }

    alert("Thank you for shopping with 119 Handmade Store!");

    cart = [];

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// Display cart when page loads
window.onload = function() {

    displayCart();

};


// Contact Form Validation
function validateContactForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        alert("Please enter your name!");
        return false;
    }

    if (email == "") {
        alert("Please enter your email!");
        return false;
    }

    if (email.indexOf("@") == -1 ||
        email.indexOf(".") == -1) {

        alert("Please enter a valid email!");
        return false;
    }

    if (message == "") {
        alert("Please enter your message!");
        return false;
    }

    alert("Thank you for contacting 119 Handmade Store!");

    return false;
}

