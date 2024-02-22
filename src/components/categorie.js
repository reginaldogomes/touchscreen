// path/filename: ./categoryLinks.js
// Function to generate category links with Bootstrap Icons

import '../styles/components/categorie.scss'

export function categorie() {
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

  let html = '';
  categories.forEach(category => {
    html += `
      <button class="button_cat">
        <i class="${category.icon}"></i>
        ${category.name}
      </button>
    `;
  });
  html += '';

  document.getElementById('categorie').innerHTML += html; // Append to the body or a specific element
}
