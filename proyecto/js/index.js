
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

    cartList.push(products.find((pepito) => pepito.id == id ))

}


// function cleanCart() {
//     cartList.length = 0;
// }
function calculaSubtotal() {
// for (i = 0; i< cartList.length; i++) {

//     switch (cartList[i].type){
//         case "grocery":
//             subtotal.grocery.value += cartList[i].price;
//             break;
//         case "beauty":
//             subtotal.beauty.value += cartList[i].price;
//             break;
//         case "clothes":
//             subtotal.clothes.value += cartList[i].price;
//             break;
//         default:
//             console.log("hay un error");
//             break;
//         }
//     }
    

var tipus = Object.keys(subtotal);

for (var i = 0; i < cartList.length; i++){
  tipus.forEach(element => {
      if(cartList[i].type == element) {
          var total2 =subtotal[element].value + cartList[i].price;
          subtotal[element].value = parseFloat(total2.toFixed(2));
      } })
}
}


// for (var i = 0; i < cartList.length; i++){
//     for (var j = 0; j < tipus.length; j++) {
//         if (cartList[i].type == tipus[j]) {
//             var total2 = subtotal[tipus[j]].value + cartList.price;
//             subtotal[tipus[j]].value = parseFloat(total2.toFixed(2));
//         }
        
//     }
// }
// }

// // orderPrice
// Array  prototype.sort() ==> products

// const products_Price1 = products.sort((products1, products2) =>
// products1.price - products2.price)

function OrdenarProductos(){
    var productOrderPrice = products.sort((element1, element2) => (element1.price > element2.price) ? 1 : -1);

    console.log("ordena de menor a mayor");

    console.table(productOrderPrice);
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