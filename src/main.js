import './style.scss'
import viteLogo from '../public/images/vite.svg'
import { setupCounter } from './components/counter'

document.querySelector('#app').innerHTML = `
<header>Some content inside the header</header>
<aside>A sidebar here</aside>
<main> 
  <section>Section 1</section>
  <section>Section 2</section>
  <section>Section 3</section>
  <section>Section 4</section>
  <section>Section 5</section>
  <section>Section 6</section>
  <section>Section 7</section>
  <section>Section 8</section>
  <section>Section 9</section>
  <section>Section 10</section>
</main>
<footer>Some content inside the footer</footer>
`

setupCounter(document.querySelector('#counter'))
