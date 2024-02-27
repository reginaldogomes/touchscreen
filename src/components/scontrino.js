// Define the product list creation function

import '../styles/components/scontrino.scss'
import icon from '../../public/images/grid.svg'

export function scontrino() {

  const scontrinos = [
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
  ];

  // Start the list HTML
  let html = '<ul class="cart-list">';
  // Loop through each product to create its button with an icon
  scontrinos.forEach(scontrino => {
      html += `
        <li class="cart-item">
          <div class="cart-item-details">
              <span>${scontrino.name}</span>
              <span>${scontrino.value}</span>
          </div>
          <div class="cart-item-actions">
              <button class="remove-btn">
                <i class="bi bi-trash"></i>
              </button>
          </div>
        </li>
      `;
  });
  html += `
    <li>Valor: R$ 300,00</li>
    `;
  html += '</ul>';

  document.getElementById('scontrino').innerHTML += html;
}

