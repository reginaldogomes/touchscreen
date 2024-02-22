// Define the product list creation function

import '../styles/components/scontrino.scss'

export function funzioni() {

  const scontrinos = [
    { name: "Pizza", icon: "bi bi-emoji-smile" }, // Replace with appropriate icon class
    { name: "Sushi", icon: "bi bi-emoji-heart-eyes" } // Replace with appropriate icon class
  ];

  // Start the list HTML
  let html = '';
  // Loop through each product to create its button with an icon
  scontrinos.forEach(scontrino => {
      html += `
          <button class="product-button">
              <i class="${scontrino.icon}"></i> ${scontrino.name}
          </button>
      `;
  });
  // Close the container div
  html += '';

  document.getElementById('funzioni').innerHTML += html;
}

