// path/filename: ./categoryLinks.js
// Function to generate category links with Bootstrap Icons

import '../styles/components/categoryLinks.scss'

export function categoryLinks() {
  const categories = [
    { name: 'Pizza', icon: 'bi bi-pizza' },
    { name: 'Burger', icon: 'bi bi-hamburger' },
    { name: 'Salad', icon: 'bi bi-cup-straw' },
    { name: 'Dessert', icon: 'bi bi-cupcake' },
    { name: 'Burger', icon: 'bi bi-hamburger' },
    { name: 'Salad', icon: 'bi bi-cup-straw' },
    { name: 'Dessert', icon: 'bi bi-cupcake' },
    { name: 'Burger', icon: 'bi bi-hamburger' },
    { name: 'Salad', icon: 'bi bi-cup-straw' },
    { name: 'Dessert', icon: 'bi bi-cupcake' },
    { name: 'Beverage', icon: 'bi bi-cup-fill' }
  ];

  let html = '<div class="flex-container">';
  categories.forEach(category => {
    html += `
      <a href="#" class="grid-item">
        <i class="${category.icon}"></i>
        ${category.name}
      </a>
    `;
  });
  html += '</div>';

  document.getElementById('categoryLinks').innerHTML += html; // Append to the body or a specific element
}
