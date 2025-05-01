const menuItems = [
    { name: "Burger", price: "$5" },
    { name: "Pizza", price: "$8" },
    { name: "Pasta", price: "$7" }
];

const menuDiv = document.getElementById("menu");
const orderList = document.getElementById("orderList");

menuItems.forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = `${item.name} - ${item.price}`;
    btn.onclick = () => addToOrder(item.name);
    menuDiv.appendChild(btn);
});

function addToOrder(item) {
    const li = document.createElement("li");
    li.textContent = item;
    orderList.appendChild(li);
}

function placeOrder() {
    alert("Thank you for ordering! Your food is on the way.");
}
