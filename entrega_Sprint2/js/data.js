var products = [
    {
        id: 1,
        name: 'Halley',
        price: 1330.5,
        type: 'cars'
    },
    {
        id: 2,
        name: 'Hek',
        price:200,
        type: 'rims'
    },
    {
        id: 3,
        name: 'Blizzak ',
        price: 250,
        type: 'tires'
    },
    {
        id: 4,
        name: 'Electric White',
        price: 260,
        type: 'color'
    }
   
]
var cart=[];

// Array de la llista de la compra

var cartList = [];

var subtotal = {
    cars: {
        subtotal: 0,   
    },
    rims: {
        subtotal: 0,
    },
    
    tires: {
        subtotal: 0, 
    },

    color: {
        subtotal: 0, 
    }
    
};
