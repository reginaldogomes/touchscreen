// Define the product list creation function

import '../styles/components/products.scss'

export function prodotti() {

  const prodotti = [
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
    { name: "Burger", icon: "bi bi-emoji-sunglasses" }, // Replace with appropriate icon class
    { name: "Sushi", icon: "bi bi-emoji-heart-eyes" } // Replace with appropriate icon class
  ];

  // Start the list HTML
  let html = '';
  // Loop through each product to create its button with an icon
  prodotti.forEach(product => {
      html += `
          <button class="button_prod">
              <i class="${product.icon}"></i> ${product.name}
          </button>
      `;
  });
  // Close the container div
  html += '';

  document.getElementById('prodotti').innerHTML += html;
}

