import pageLoad from "./page-load";
import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";
import './style.css';


pageLoad()
homePage()

const home = document.querySelector('#home-button')
const menu = document.querySelector('#menu-button')
const contact = document.querySelector('#contact-button')
const pageContent = document.querySelector('#page-content')
const headerButtons = document.querySelectorAll('.header-button,.logo')

headerButtons.forEach(button => {
    button.addEventListener('click', () => {
        pageContent.innerHTML = ''

        switch(button.getAttribute('id')) {
            case 'logo':
            case 'home-button':
                home.classList.add('active-button')
                menu.classList.remove('active-button')
                contact.classList.remove('active-button')
                homePage()
                break;
            case 'menu-button': 
                home.classList.remove('active-button')
                menu.classList.add('active-button')
                contact.classList.remove('active-button')
                menuPage()
                break;
            case 'contact-button':
                home.classList.remove('active-button')
                menu.classList.remove('active-button')
                contact.classList.add('active-button')
                contactPage()
        }
    })
})
