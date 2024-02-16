// Define the product list creation function

import '../styles/components/listProducts.scss'

export function listProducts(products) {

  const listProducts = [
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
  listProducts.forEach(product => {
      html += `
          <button class="product-button">
              <i class="${product.icon}"></i> ${product.name}
          </button>
      `;
  });
  // Close the container div
  html += '</div>';

  document.getElementById('listProducts').innerHTML += html;
}

