// document.querySelectorAll(".cardAdd").forEach(function (element) {
//     element.addEventListener('click', function () {
//         var dataID = element.getAttribute('data-id');
//         alert(dataID);
//         addToCart(dataID);
//     });
// });

// document.querySelectorAll(".cardRemove").forEach(function (element) {
//     element.addEventListener('click', function () {
//         var dataID = element.getAttribute('data-id');
//         alert(dataID);
//         removeFromCart(dataID);
//     });
// });


// document.querySelectorAll(".cardProduct").forEach(function (element) {
//     element.addEventListener('click', function (e)  {
//         if (e.target.classList.contains('cardAdd')){
//             var dataID = element.getAttribute('data-id');
//             alert(dataID);
//             addToCart(dataID);
//         }
//     });
    
// });

// document.querySelectorAll(".cardRemove").forEach(function (element) {
//     element.addEventListener('click', function ()  {
//             var dataID = element.getAttribute('data-id');
//             removeFromCart(dataID);
//         });
// });

document.querySelectorAll(".cardProduct").forEach(function (element) {
    element.addEventListener('click', function (e){
            var dataID = element.getAttribute('data-id');
            alert(dataID);
            if (e.target.classList.contains('cardAdd')) {
                addToCart(dataID);
            }
            if(e.target.classList.contains('cardRemove')){
                removeFromCart(dataID);
            }    
    });
    
});