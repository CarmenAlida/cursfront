
function buy(id) {
  

    for (let i = 0; i < products.length; i++) {
       
        if(products[i].id == id)
        {
            
            cartList.push(products[i]);
            console.table(products[i]);
        }

    }
}
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