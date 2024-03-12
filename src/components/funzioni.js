import '../styles/components/scontrino.scss'
import icon from '../../public/images/grid.svg'

export function funzioni() {

  const scontrinos = [
    { name: "Pizza teste", icon: 'bi bi-journal-plus' },
    { name: "Sushi", icon: 'bi bi-x-circle' }
  ];

  // Start the list HTML
  let html = '';
  // Loop through each product to create its button with an icon
  scontrinos.forEach(scontrino => {
      html += `
          <button class="button_func button_anula">
              <i class="${scontrino.icon}"></i> ${scontrino.name}
          </button>
      `;
  });
  // Close the container div
  html += '';

  document.getElementById('funzioni').innerHTML += html;
}

