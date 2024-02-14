import './style.scss'
import viteLogo from '../public/images/vite.svg'
import { setupCounter } from './components/counter'

document.querySelector('body').innerHTML = `
<header>Header</header>
<main>
    <div class="col1">
        <div class="divisione">Divisioni</div>
        <div class="categorias">Categorias</div>
    </div>
    <div class="col2">
        <div class="cola">Prodotti/Elementi</div>
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
