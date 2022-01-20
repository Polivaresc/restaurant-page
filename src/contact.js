export default function contactPage() {
    const contactTitle = document.createElement('div')
    const info = document.createElement('div')

    const phone = document.createElement('div')
    const phoneTitle = document.createElement('p')
    const phoneDescription = document.createElement('div')

    const email = document.createElement('div')
    const emailTitle = document.createElement('p')
    const emailDescription = document.createElement('div')

    const location = document.createElement('div')
    const locationTitle = document.createElement('p')
    const locationDescription = document.createElement('div')

    contactTitle.classList.add('title')
    phoneTitle.classList.add('subtitle')
    emailTitle.classList.add('subtitle')
    locationTitle.classList.add('subtitle')

    contactTitle.textContent = 'Contact'
    phoneTitle.textContent = 'Phone'
    emailTitle.textContent = 'Email address'
    locationTitle.textContent = 'Location'

    phone.append(phoneTitle, phoneDescription)
    email.append(emailTitle, emailDescription)
    location.append(locationTitle, locationDescription)

    info.append(phone, email, location)

    document.querySelector('#page-content').append(contactTitle, info)
}