// Define the product list creation function

import '../styles/components/products.scss'

export function products() {

  const products = [
    { name: "Pizza", icon: "bi bi-emoji-smile" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Sushi", icon: "bi bi-emoji-heart-eyes" } // Replace with appropriate icon class
  ];

  // Start the list HTML
  let html = '<div class="product-grid">';
  // Loop through each product to create its button with an icon
  products.forEach(product => {
      html += `
          <button class="button_prod">
              <i class="${product.icon}"></i> ${product.name}
          </button>
      `;
  });
  // Close the container div
  html += '</div>';

  document.getElementById('products').innerHTML += html;
}

