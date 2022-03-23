const cards = document.getElementById('cards')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', ( ) =>{
    pintarCardsProducts();
});

function pintarCardsProducts() {
    products.forEach(item =>{
        templateCard.querySelector('img').setAttribute('src', item.img);
        templateCard.querySelector('h5').textContent = item.name
        templateCard.querySelector('p').textContent = item.price
        templateCard.querySelector('h6').textContent = item.type
        const clone = templateCard.cloneNode(true)
        // se guarda en la memoria
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}