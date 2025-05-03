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
  a.addEventListener('click', hamburgerMenu)
});

//navElm.addEventListener('click, () => {
// navElm.classList.add('nav-closed')})

const handleSubmit = async (event) => {
  event.preventDefault();
  console.log(event.target.dataset.id)
  const id = event.target.dataset.id
  await fetch(`http://localhost:4000/api/drinks/${id}`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(
      [{
          op: 'replace',
          path: '/ordered',
          value: true
        }]
      ),
    }
  );
  window.location.reload();
}

const forms = document.querySelectorAll('.drink__controls')
forms.forEach((form) => {
  form.addEventListener('submit', handleSubmit)
})