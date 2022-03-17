// Exercici 6: textContent
// Modificarem el següent text
// Encuentra hospedaje para tus vacaciones

console.log("Exercici 6: textContent");
const h1 = document.querySelector('h1').textContent ='Bienvenidos a este bello día';
console.log(h1);

console.log("modificar imagen");
const imagen = document.querySelector('.card img');
console.log(imagen.src);
imagen.src = 'img/hacer2.jpg';