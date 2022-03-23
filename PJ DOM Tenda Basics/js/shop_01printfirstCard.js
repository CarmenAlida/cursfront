

var card = document.getElementById('card1')

// Pintar 1er producto
function firstCard() {
    card.querySelector('img').setAttribute("src", 'assets/img/shop-01.jpg');
    card.querySelector('h5').textContent = 'oil';
    card.querySelector('p').textContent = '10€';
    card.querySelector('h6').textContent = '-Grocery-';
}


document.addEventListener('DOMContentLoaded', ()=>{
    firstCard();

});

