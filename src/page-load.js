export default function pageLoad() {
    const headline = document.createElement('div')
    const logo = document.createElement('a')

    const pages = document.createElement('div')
    const home = document.createElement('button')
    const menu = document.createElement('button')
    const contact = document.createElement('button')

    const pageContent = document.createElement('div')
    pageContent.setAttribute('id', 'page-content')

    logo.setAttribute('id', 'logo')
    home.setAttribute('id', 'home-button')
    menu.setAttribute('id', 'menu-button')
    contact.setAttribute('id', 'contact-button')

    headline.classList.add('headline')
    logo.classList.add('logo')
    pages.classList.add('pages')

    pageContent.innerHTML = ''
    logo.textContent = 'Restaurant\'s logo'
    home.textContent = 'Home'
    menu.textContent = 'Menu'
    contact.textContent = 'Contact'
    
    pages.append(home, menu, contact)
    headline.append(logo, pages)
    
    document.querySelector('#content').append(headline, pageContent)
}
