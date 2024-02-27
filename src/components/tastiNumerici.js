import '../styles/components/scontrino.scss'

export function tastiNumerici() {
  // Start the list HTML
  let html = '<div class="keypad">';
      html += `<button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <!-- Additional buttons for 0 and operations can be added here -->
        <button>0</button>
        <button>+</button>
        <button>-</button>
        <button>&times;</button>
        <button>&div;</button>
        <button>=</button>
      </div>`;
  html += '</div>';

  document.getElementById('teclado').innerHTML += html;
}

