import './style.scss'
// import viteLogo from '../public/images/vite.svg'
import { categoryLinks } from './components/categoryLinks.js'
import { listProducts } from './components/listProducts.js'

document.querySelector('body').innerHTML = `
<header>Header</header>
<main>
    <div class="col1">
        <div class="divisione">Divisioni</div>
        <div class="categorias" id="categoryLinks"></div>
    </div>
    <div class="col2">
        <div class="cola" id="listProducts"></div>
        <div class="colb">
            <div class="colb1">Scontrino</div>
            <div class="colb2">Tasti numerici</div>
        </div>
    </div>
    <div class="col3">
        <div class="Funzioni">Funzioni</div>
    </div>
</main>
<footer>Status/Info</footer>`

// setupCounter(document.querySelector('#counter'))
categoryLinks()
listProducts()