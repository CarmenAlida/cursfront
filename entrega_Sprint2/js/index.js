

function buy(id) {

    cartList.push(products.find((products) => products.id == id ))

}


function calculaSubtotal() {

    

var tipus = Object.keys(subtotal);

for (var i = 0; i < cartList.length; i++){
  tipus.forEach(element => {
      if(cartList[i].type == element) {
          var total2 =subtotal[element].subtotal + cartList[i].price;
          subtotal[element].subtotal = parseFloat(total2.toFixed(2));
      } })
}
}


function cleanCart(){
    cartList = [];
}



// orderPrice
// Array  prototype.sort() ==> products


const products_Price1 = products.sort((products1, products2) =>
products1.price - products2.price)





















// // total de la compra
// var total = 0;

// //Exercici 0: Mostrar cartList

// function ShowCartList() {
//     console.table(products);
//     console.table(cartList);
// }

// function showPrinces() {
//     console.table(subtotal);
// }
//  function showCart() {
//      console.table(cart);
//  }

//  // Exercise 1
//  function buy(id){
//      cartList.push(products[id . 1]);
//  }