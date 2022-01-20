import pageLoad from "./page-load";
import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";
import './style.css';


pageLoad()
homePage()

const logo = document.querySelector('#logo')
const home = document.querySelector('#home-button')
const menu = document.querySelector('#menu-button')
const contact = document.querySelector('#contact-button')
const pageContent = document.querySelector('#page-content')

logo.addEventListener('click', () => {
    pageContent.innerHTML = ''
    homePage()
})
home.addEventListener('click', () => {
    pageContent.innerHTML = ''
    homePage()
})
menu.addEventListener('click', () => {
    pageContent.innerHTML = ''
    menuPage()
})
contact.addEventListener('click', () => {
    pageContent.innerHTML = ''
    contactPage()
})