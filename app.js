// Dummy data for products
const products = [
    {
        id: 1,
        name: "Nike Air Max",
        price: 120,
        image: "images/shoe1.jpg"
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        price: 140,
        image: "images/shoe2.jpg"
    },
    {
        id: 3,
        name: "Puma RS-X",
        price: 100,
        image: "images/shoe3.jpg"
    }
];

let cart = [];

function displayProducts() {
    const productSection = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-card');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productSection.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} added to cart!`);
}

function goToCheckout() {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = "checkout.html";
}

// Call displayProducts when the page loads
window.onload = displayProducts;
