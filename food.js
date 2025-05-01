let cart = [];
function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(({ item, price }) => {
        const li = document.createElement('li');
        li.textContent = `${item} - $${price.toFixed(2)}`;
        cartItems.appendChild(li);
        totalPrice += price;
    });

    total.textContent = totalPrice.toFixed(2);
}
