// path/filename: ./categoryLinks.js
// Function to generate category links with Bootstrap Icons

import '../styles/components/divisioni.scss'
import icon from '../../public/images/grid.svg'


export function divisioni() {
  const divisionis = [
    { name: 'Ristoranti', icon: icon },
    { name: 'Ristoranti', icon: icon },
    { name: 'Mercado', icon: icon }
  ];

  let html = '';
  divisionis.forEach(divisioni => {
    html += `
      <button class="button_div"> <img src="${divisioni.icon}" /> ${divisioni.name}</button>
    `;
  });
  html += '';

  document.getElementById('divisioni').innerHTML += html; // Append to the body or a specific element
}
