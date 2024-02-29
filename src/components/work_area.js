export function workArea() {
  // Start the list HTML
  let html = '<div class="work_area_nuova">';
  html += `<h2>Nuova vendita</h2>
          <span>Vendita</span>
          <input id="VENDITA" type="text" readonly="" size="5" maxlength="5" value="40" /> 
          <span>Sala:</span>
          <input id="SALA" type="text" size="3" maxlength="3" style="" value="0" />
          <span>Cameriere</span>
          <select id="CAMERIERE" >&gt;<option value="">Scegli</option><option value="001">001 - Giulia Tudisco</option><option value="GDG">GDG - Giuseppe  De Giosa</option><option value="PT2">PT2 - Paolo Tintori</option><option value="PP">PP - Paulo Paganelli</option></select>
          <span>Tavolo:</span><input id="TAVOLO" type="text" size="3" maxlength="3" style="" class="numero" value="0" />`;
  html += "</div>";

  document.getElementById("work_area").innerHTML += html;
}
