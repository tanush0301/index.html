const products = [
    { id: 1, name: "Nike Air Force 1", price: 120, img: "https://via.placeholder.com/200" },
    { id: 2, name: "Adidas Yeezy Boost", price: 300, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Jordan 1 Retro", price: 250, img: "https://via.placeholder.com/200" }
];

let cartCount = 0;

function displayProducts() {
    let productList = document.getElementById("product-list");
    products.forEach(product => {
        let productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
}

document.addEventListener("DOMContentLoaded", displayProducts);
