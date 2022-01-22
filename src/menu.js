export default function menuPage() {
    const menuTitle = document.createElement('div')
    const sections = document.createElement('div')

    const starters = document.createElement('div')
    const startersTitle = document.createElement('p')
    const startersDescription = document.createElement('div')

    const sd1 = document.createElement('div')
    const pricesd1 = document.createElement('div')
    const sd2 = document.createElement('div')
    const pricesd2 = document.createElement('div')

    const mains = document.createElement('div')
    const mainsTitle = document.createElement('p')
    const mainsDescription = document.createElement('div')

    const md1 = document.createElement('div')
    const pricemd1 = document.createElement('div')
    const md2 = document.createElement('div')
    const pricemd2 = document.createElement('div')

    const desserts = document.createElement('div')
    const dessertsTitle = document.createElement('p')
    const dessertsDescription = document.createElement('div')

    const dd1 = document.createElement('div')
    const pricedd1 = document.createElement('div')
    const dd2 = document.createElement('div')
    const pricedd2 = document.createElement('div')

    const drinks = document.createElement('div')
    const drinksTitle = document.createElement('p')
    const drinksDescription = document.createElement('div')

    const kd1 = document.createElement('div')
    const pricekd1 = document.createElement('div')
    const kd2 = document.createElement('div')
    const pricekd2 = document.createElement('div')

    menuTitle.classList.add('title')
    startersTitle.classList.add('subtitle')
    mainsTitle.classList.add('subtitle')
    dessertsTitle.classList.add('subtitle')
    drinksTitle.classList.add('subtitle')

    startersDescription.classList.add('menu-description')
    mainsDescription.classList.add('menu-description')
    dessertsDescription.classList.add('menu-description')
    drinksDescription.classList.add('menu-description')

    menuTitle.textContent = 'Menu'
    startersTitle.textContent = 'Starters'
    mainsTitle.textContent = 'Main dishes'
    dessertsTitle.textContent = 'Desserts'
    drinksTitle.textContent = 'Drinks'
    
    sd1.textContent = 'Green salad'
    pricesd1.textContent = '4€'
    sd2.textContent = 'Hummus'
    pricesd2.textContent = '5€'

    md1.textContent = 'Roasted seitan with potatoes'
    pricemd1.textContent = '8.50€'
    md2.textContent = 'Custom pizza'
    pricemd2.textContent = '9€'

    dd1.textContent = 'Homemade cheesecake'
    pricedd1.textContent = '3€'
    dd2.textContent = 'Glutenfree brownies'
    pricedd2.textContent = '3.50€'

    kd1.textContent = 'Beer'
    pricekd1.textContent = '2€'
    kd2.textContent = 'Water'
    pricekd2.textContent = '1€'

    startersDescription.append(sd1, pricesd1, sd2, pricesd2)
    mainsDescription.append(md1, pricemd1, md2, pricemd2)
    dessertsDescription.append(dd1, pricedd1, dd2, pricedd2)
    drinksDescription.append(kd1, pricekd1, kd2, pricekd2)

    starters.append(startersTitle, startersDescription)
    mains.append(mainsTitle, mainsDescription)
    desserts.append(dessertsTitle, dessertsDescription)
    drinks.append(drinksTitle, drinksDescription)

    sections.append(starters, mains, desserts, drinks)

    document.querySelector('#page-content').append(menuTitle, sections)
}