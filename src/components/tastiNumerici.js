// Define the product list creation function

import '../styles/components/scontrino.scss'

export function tastiNumerici() {

  const scontrinos = [
    { name: "Pizza", icon: "bi bi-emoji-smile" }, // Replace with appropriate icon class
    { name: "Sushi", icon: "bi bi-emoji-heart-eyes" } // Replace with appropriate icon class
  ];

  // Start the list HTML
  let html = '<div class="product-grid">';
  // Loop through each product to create its button with an icon
  scontrinos.forEach(scontrino => {
      html += `
      <div class="keyboard">
        <div class="number">
          <span data-number="1"><i>1</i></span>
          <span data-number="2"><i>2</i></span>
          <span data-number="3"><i>3</i></span>
          <span data-number="4"><i>4</i></span>
          <span data-number="5"><i>5</i></span>
          <span data-number="6"><i>6</i></span>
          <span data-number="7"><i>7</i></span>
          <span data-number="8"><i>8</i></span>
          <span data-number="9"><i>9</i></span>
        </div>
        <div class="number aling-right">
          <span class="call-button"><i><img src="https://image.flaticon.com/icons/svg/40/40316.svg" alt="" /></i></span>
          <span data-number="0"><i>0</i></span>
          <span><i class="delete"><img src="https://image.flaticon.com/icons/svg/61/61167.svg" width="30" height="30" alt="Left Arrow free icon" title="Left Arrow free icon"></i></span>
        </div>
      </div>

      <button class="product-button">
          <i class="${scontrino.icon}"></i> ${scontrino.name}
      </button>
      `;
  });
  // Close the container div
  html += '</div>';

  document.getElementById('numerici').innerHTML += html;
}

