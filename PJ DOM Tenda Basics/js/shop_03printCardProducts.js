document.addEventListener('DOMContentLoaded', () => {
    pintarCardsProducts();
});

function pintarCardsProducts() {
    products.forEach(item => {
        const card = document.getElementById('card' + item.id);
        card.querySelector('img').setAttribute('src', item.img);
        card.querySelector('h5').textContent = item.name
        card.querySelector('p').textContent = item.price
        card.querySelector('h6').textContent = item.type
    })
}