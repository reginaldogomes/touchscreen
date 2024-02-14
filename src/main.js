import './style.scss'
import viteLogo from '../public/images/vite.svg'
import { setupCounter } from './components/counter'

document.querySelector('body').innerHTML = `
<header>Header</header>
<main>
    <div class="col1">
        <div class="divisione">Divisioni</div>
    </div>
    <div class="col2">
        <div class="cola">col2 col A</div>
        <div class="colb">col2 col B</div>
    </div>
    <div class="col3">
        <div class="Funzioni">Funzioni</div>
    </div>
</main>
<footer>Status/Info</footer>`

// setupCounter(document.querySelector('#counter'))
