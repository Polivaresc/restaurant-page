export default function menuPage() {
    const menuTitle = document.createElement('div')
    const sections = document.createElement('div')

    const starters = document.createElement('div')
    const startersTitle = document.createElement('p')
    const startersDescription = document.createElement('div')

    const mains = document.createElement('div')
    const mainsTitle = document.createElement('p')
    const mainsDescription = document.createElement('div')

    const desserts = document.createElement('div')
    const dessertsTitle = document.createElement('p')
    const desserstDescription = document.createElement('div')

    const drinks = document.createElement('div')
    const drinksTitle = document.createElement('p')
    const drinksDescription = document.createElement('div')

    menuTitle.classList.add('title')
    startersTitle.classList.add('subtitle')
    mainsTitle.classList.add('subtitle')
    dessertsTitle.classList.add('subtitle')
    drinksTitle.classList.add('subtitle')

    menuTitle.textContent = 'Menu'
    startersTitle.textContent = 'Starters'
    mainsTitle.textContent = 'Main dishes'
    dessertsTitle.textContent = 'Desserts'
    drinksTitle.textContent = 'Drinks'

    starters.append(startersTitle, startersDescription)
    mains.append(mainsTitle, mainsDescription)
    desserts.append(dessertsTitle, desserstDescription)
    drinks.append(drinksTitle, drinksDescription)

    sections.append(starters, mains, desserts, drinks)

    document.querySelector('#page-content').append(menuTitle, sections)
}