import './cassa.scss'
// import viteLogo from '../public/images/vite.svg'
import { categorie } from './components/categorie.js'
import { prodotti } from './components/prodotti.js'
import { divisioni } from './components/divisioni.js'
import { scontrino } from './components/scontrino.js'
import { funzioni } from './components/funzioni.js'
import { tastiNumerici } from './components/tastiNumerici.js'

document.querySelector('body').innerHTML = `
<header>
    <div class="titolo">Cassa</div>
    <div class="operatore">Operador</div>
</header>
<main>
    <div class="col-left">
        <div class="divisioni" id="divisioni"></div>
        <div class="categorie" id="categorie"></div>
    </div>
    <div class="col-center">
        <div class="left">
            <div class="prodotti" id="prodotti"></div>
        </div>
        <div class="right">
            <div class="work_area" id="work_area">
                <h2>Nuova vendita</h2>
                <span>Vendita</span>
                <input id="VENDITA" type="text" readonly="" size="5" maxlength="5" value="40" /> 
                <span>Sala:</span>
                <input id="SALA" type="text" size="3" maxlength="3" style="" value="0" />
                <span>Cameriere</span>
                <select id="CAMERIERE" >&gt;<option value="">Scegli</option><option value="001">001 - Giulia Tudisco</option><option value="GDG">GDG - Giuseppe  De Giosa</option><option value="PT2">PT2 - Paolo Tintori</option><option value="PP">PP - Paulo Paganelli</option></select>
                <span>Tavolo:</span><input id="TAVOLO" type="text" size="3" maxlength="3" style="" class="numero" value="0" />
            </div>
            <div class="scontrino" id="scontrino"></div>
            <div class="teclado" id="teclado"></div>
        </div>
    </div>
    <div class="col-right">
        <div class="funzioni" id="funzioni"></div>
    </div>
</main>
<footer>Status/Info</footer>`

divisioni()
categorie()
prodotti()
scontrino()
funzioni()
tastiNumerici()