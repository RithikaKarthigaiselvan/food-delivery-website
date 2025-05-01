let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    
    cart.forEach(order => {
        let listItem = document.createElement("li");
        listItem.textContent = `${order.item} - $${order.price}`;
        cartList.appendChild(listItem);
    });

    document.getElementById("total").textContent = total.toFixed(2);
}
