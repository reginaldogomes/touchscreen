import '../styles/components/categorie.scss'
import icon from '../../public/images/grid.svg'


export function categorie() {
  const categories = [
    { name: 'Pizza', icon: icon },
    { name: 'Burger', icon: icon },
    { name: 'Salad', icon: icon },
    { name: 'Dessert', icon: icon },
    { name: 'Burger', icon: icon },
    { name: 'Salad', icon: icon },
    { name: 'Dessert', icon: icon },
    { name: 'Burger', icon: icon },
    { name: 'Salad', icon: icon },
    { name: 'Dessert', icon: icon },
    { name: 'Beverage', icon: icon }
  ];

  let html = '';
  categories.forEach(category => {
    html += `
      <button class="button_cat">
        <img src="${category.icon}" />
        ${category.name}
      </button>
    `;
  });
  html += '';

  document.getElementById('categorie').innerHTML += html; // Append to the body or a specific element
}
