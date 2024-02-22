// path/filename: ./categoryLinks.js
// Function to generate category links with Bootstrap Icons

import '../styles/components/categorie.scss'

export function categorie() {
  const categories = [
    { name: 'Pizza', icon: 'bi bi-cup-straw' },
    { name: 'Burger', icon: 'bi bi-cup-straw' },
    { name: 'Salad', icon: 'bi bi-cup-straw' },
    { name: 'Dessert', icon: 'bi bi-cup-straw' },
    { name: 'Burger', icon: 'bi bi-cup-straw' },
    { name: 'Salad', icon: 'bi bi-cup-straw' },
    { name: 'Dessert', icon: 'bi bi-cup-straw' },
    { name: 'Burger', icon: 'bi bi-cup-straw' },
    { name: 'Salad', icon: 'bi bi-cup-straw' },
    { name: 'Dessert', icon: 'bi bi-cup-straw' },
    { name: 'Beverage', icon: 'bi bi-cup-straw' }
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
