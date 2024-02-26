// Define the product list creation function

import '../styles/components/products.scss'
import icon from '../../public/images/pasta.png'


export function prodotti() {

  const prodotti = [
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
  ];

  // Start the list HTML
  let html = '';
  // Loop through each product to create its button with an icon
  prodotti.forEach(product => {
      html += `
          <button class="button_prod">
              <img src="${product.icon}" /> ${product.name}
          </button>
      `;
  });
  // Close the container div
  html += '';

  document.getElementById('prodotti').innerHTML += html;
}

