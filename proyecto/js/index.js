
function buy(id) {
  

    for (let i = 0; i < products.length; i++) {
       
        if(products[i].id == id)
        {
            
            cartList.push(products[i]);
            console.table(products[i]);
        }

    }
}

// function cleanCart() {
//     cartList.length = 0;
// }
function calculaSubtotal() {
for (i = 0; i< cartList.length; i++) {

    switch (cartList[i].type){
        case "grocery":
            subtotal.grocery.value += cartList[i].price;
            break;
        case "beauty":
            subtotal.beauty.value += cartList[i].price;
            break;
        case "clothes":
            subtotal.clothes.value += cartList[i].price;
            break;
        default:
            console.log("hay un error");
            break;
        }
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