// path/filename: ./categoryLinks.js
// Function to generate category links with Bootstrap Icons

import '../styles/components/divisioni.scss'

export function divisioni() {
  const divisionis = [
    { name: 'Ristoranti', icon: 'bi bi-cup-fill' },
    { name: 'Mercado', icon: 'bi bi-cup-fill' }
  ];

  let html = '';
  divisionis.forEach(divisioni => {
    html += `
      <button class="button_div"> <i class="${divisioni.icon}"></i> ${divisioni.name}</button>
    `;
  });
  html += '';

  document.getElementById('divisioni').innerHTML += html; // Append to the body or a specific element
}
