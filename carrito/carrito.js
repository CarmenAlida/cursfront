function addToCart(id){
    function buscaID(element) {
        if (element.id == id) {
            return element;
        }
    }
    productBuy = products.find(buscaID);
    cartList.push(productBuy);
    console.table(cartList);
}
function totalCart() {
    let total=0;
    cartList.forEach(producto => {
        
        total += producto.price;
    });
    return total;
}
function generateCart()  {
  
    cartList.forEach(producto => {
        if (   isNaN(producto.quantity)  )
            {
            producto.quantity =1;
            console.log("hola");
        } else {
            producto.quantity++;
        }        
    }); 
}
function removeFromCart(id) {
productRemove = cartList.findIndex((product) => product.id == id);
console.log("el indice "+productRemove);
cartList.splice(productRemove,1);
console.table(cartList);
}

