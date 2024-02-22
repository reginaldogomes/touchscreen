import './cassa.scss'
// import viteLogo from '../public/images/vite.svg'
import { categorie } from './components/categorie.js'
import { products } from './components/products.js'
import { divisioni } from './components/divisioni.js'
import { scontrino } from './components/scontrino.js'
import { funzioni } from './components/funzioni.js'
import { tastiNumerici } from './components/tastiNumerici.js'

document.querySelector('body').innerHTML = `
<header>Cassa</header>
<main>
    <div class="col-left">
        <div class="divisioni" id="divisioni"></div>
        <div class="categorie" id="categorie"></div>
    </div>
    <div class="col-center">
        <div class="left">
            <div class="products" id="products"></div>
        </div>
        <div class="right">
            <div class="scontrino" id="scontrino"></div>
        </div>
    </div>
    <div class="col-right">
        <div class="funzioni" id="funzioni"></div>
    </div>
</main>
<footer>Status/Info</footer>`

divisioni()
categorie()
products()
scontrino()
funzioni()
tastiNumerici()