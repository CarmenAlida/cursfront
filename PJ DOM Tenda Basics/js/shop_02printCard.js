document.addEventListener('DOMContentLoaded', ()=> {
    pintarCards();
});

// pintar todos los productos

function pintarCards() {
    for (let i = 1 ; i < 10; i++) {
        const card = document.getElementById('card'+i);
        card.querySelector('img').setAttribute("src", './assets/img/shop_01.jpg');
        card.querySelector('h5').textContent = 'cooking oil'
        card.querySelector('p').textContent = '$250'
        card.querySelector('h6').textContent = '-grocery-'
    }
}