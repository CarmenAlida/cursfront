
function addToCart(id) {
   alert("add to cart")
}


function removeFromCart(id) {
    alert("remove to cart")
}

/*Exercici 1: Afegeix Events a les cards d’una tenda
Donada la tenda penjada al meu GIT :
[curs2022_frontVue\js\Pildores\02 DOM\PJ DOM Tenda Basics]
Afegeix els events Add i Remove per a cadascuna de les cards:
• Primer fes-ho de manera estàtica.
• Prova a fer-ho de manera dinámica.*/

let card1 = document.getElementById("card1");
var cardId1 = card1.getAttribute("data-id");

card1.addEventListener('click', e => {
    if (e.target.classList == 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId1)
        addToCart(card1);
    }
    if (e.target.classList.contains('cardRemove')) {
        alert("borrado" + cardId1)
        removeFromCart(cardId1);
    }
});

let card2 = document.getElementById("card2");
var cardId2 = card2.getAttribute("data-id");

card2.addEventListener('click', e => {
    if (e.target.classList == 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId2)
        addToCart(card2);
    }
    if (e.target.classList.contains('cardRemove')) {
        alert("borrado" + cardId2)
        removeFromCart(cardId2);
    }
});

let card3 = document.getElementById("card3");
var cardId3 = card3.getAttribute("data-id");

card3.addEventListener('click', e => {
    if (e.target.classList == 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId3)
        addToCart(card3);
    }
    if (e.target.classList.contains('cardRemove')) {
        alert("borrado" + cardId3)
        removeFromCart(cardId3);
    }
});

let card4 = document.getElementById("card4");
var cardId4 = card4.getAttribute("data-id");

card4.addEventListener('click', e => {
    if (e.target.classList == 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId4)
        addToCart(card4);
    }
    if (e.target.classList.contains('cardRemove')) {
        alert("borrado" + cardId4)
        removeFromCart(cardId4);
    }
});

let card5 = document.getElementById("card5");
var cardId5 = card5.getAttribute("data-id");

card5.addEventListener('click', e => {
    if (e.target.classList == 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId5)
        addToCart(card5);
    }
    if (e.target.classList.contains('cardRemove')) {
        alert("borrado" + cardId5)
        removeFromCart(cardId5);
    }
});

let card6 = document.getElementById("card6");
var cardId6 = card6.getAttribute("data-id");

card6.addEventListener('click', e => {
    if (e.target.classList == 'fas fa-cart-plus cardAdd') {
        
        addToCart(card6);
    }
    if (e.target.classList.contains('cardRemove')) {
        
        removeFromCart(cardId6);
    }
});

let card7 = document.getElementById("card7");
var cardId7 = card7.getAttribute("data-id");

card7.addEventListener('click', e => {
    if (e.target.classList == 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId7)
        addToCart(card7);
    }
    if (e.target.classList.contains('cardRemove')) {
        alert("borrado" + cardId7)
        removeFromCart(cardId7);
    }
});

let card8 = document.getElementById("card8");
var cardId8 = card8.getAttribute("data-id");

card8.addEventListener('click', e => {
    if (e.target.classList == 'fas fa-cart-plus cardAdd') {
        alert("afegim: " + cardId8)
        addToCart(card8);
    }
    if (e.target.classList.contains('cardRemove')) {
        alert("borrado" + cardId8)
        removeFromCart(cardId8);
    }
});