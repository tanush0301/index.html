const products = [
    { id: 1, name: "Nike Air Force 1", price: 120, img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/462561916_1569958557220023_2919462356451352830_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=fOsi9-7nqQ8Q7kNvgH00hLl&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHvXLrx-tf_oOVnTrx-cj6zXHLmrHm-ZFfxzZxWepFw1A&oe=67C4C3FD" },
    { id: 2, name: "Adidas Yeezy Boost", price: 300, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Jordan 1 Retro", price: 250, img: "https://via.placeholder.com/200" },
    { id: 4, name: "New Balance 550", price: 180, img: "https://via.placeholder.com/200" }
];

let cartCount = 0;

function displayProducts() {
    let container = document.querySelector(".products-container");
    products.forEach(product => {
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart" onclick="addToCart()">Add to Cart</button>
        `;
        container.appendChild(productCard);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
}

// Load products when page loads
document.addEventListener("DOMContentLoaded", displayProducts);
