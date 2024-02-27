// Define the product list creation function

import '../styles/components/scontrino.scss'
import icon from '../../public/images/grid.svg'

export function scontrino() {

  const scontrinos = [
    { name: "Burger", icon: icon, value:"R$ 150,00" },
    { name: "Burger", icon: icon, value:"R$ 150,00" },
  ];

  // Start the list HTML
  let html = '<ul class="scontrino-list">';
  // Loop through each product to create its button with an icon
  scontrinos.forEach(scontrino => {
      html += `
        <li class="scontrino-item">
          <div class="scontrino-item-details">
              <span>${scontrino.name}</span>
              <span>${scontrino.value}</span>
          </div>
          <div class="scontrino-item-actions">
              <button class="remove-btn">
                <i class="bi bi-trash"></i>
              </button>
          </div>
        </li>
      `;
  });
  html += '</ul>';

  document.getElementById('scontrino').innerHTML += html;
}

