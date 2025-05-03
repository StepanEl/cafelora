import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header'
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';




document.querySelector('#root').innerHTML = render(
  <div className="page" id="home">
    <Header />

    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>

    <Footer />

  </div>
);

//Navigation
const navElm = document.querySelector('.rollout-nav');
const button = document.querySelector('.nav-btn');

const hamburgerMenu = (event) => {
  navElm.classList.toggle('nav-closed');
}
button.addEventListener('click', hamburgerMenu);


const menuNames = document.querySelectorAll('.rollout-nav a')
menuNames.forEach((a) => {
  a.addEventListener('click', hamburgerMenu )
});

//navElm.addEventListener('click, () => {
 // navElm.classList.add('nav-closed')})