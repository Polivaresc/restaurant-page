import Salad from './salad.jpg'
import Pizza from './pizza.jpg'

export default function homePage() {
    const images = document.createElement('div')
    
    const descriptions = document.createElement('div')
    const d1 = document.createElement('p')
    const d2 = document.createElement('p')
    const d3 = document.createElement('p')

    const mySalad = new Image()
    mySalad.src = Salad
    const myPizza = new Image()
    myPizza.src = Pizza

    images.classList.add('images')
    descriptions.classList.add('descriptions')
    images.append(mySalad, myPizza)

    d1.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis voluptatibus rem deleniti nihil temporibus velit qui error libero nulla unde assumenda delectus necessitatibus enim fugiat debitis ratione magni explicabo, ullam amet excepturi. Eius dolorum pariatur quibusdam corrupti ratione beatae atque?'
    d2.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam quae asperiores, tenetur quas officia odio, totam voluptates officiis fugiat error doloremque reiciendis iure tempora deleniti, sunt fugit harum eveniet possimus ullam at aliquam nemo eum? Iure maxime fugit aut quasi, animi nisi eos, necessitatibus vel nostrum atque error fugiat obcaecati natus eum. Eveniet ratione aperiam voluptas natus architecto fugit.'
    d3.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam quae asperiores, tenetur quas officia odio, totam voluptates officiis fugiat error doloremque reiciendis iure tempora deleniti, sunt fugit harum eveniet possimus ullam at aliquam nemo eum? Iure maxime fugit aut quasi, animi nisi eos, necessitatibus vel nostrum atque error fugiat obcaecati natus eum. Eveniet ratione aperiam voluptas natus architecto fugit.'

    descriptions.append(d1, d2, d3)

    document.querySelector('#page-content').append(images, descriptions)
}