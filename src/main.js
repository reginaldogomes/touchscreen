import './style.scss'
import viteLogo from '../public/images/vite.svg'
import { setupCounter } from './components/counter'

document.querySelector('#app').innerHTML = `
<header>Header</header>
<main>
    <div class="col1">Coluna 1</div>
    <div class="col2">Coluna 2 (Conteúdo Principal)</div>
    <div class="col3">Coluna 3</div>
</main>
<footer>Footer</footer>`

setupCounter(document.querySelector('#counter'))
