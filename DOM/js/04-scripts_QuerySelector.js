// Exercici 4: QuerySelector
// Mostra per consola:
// • La primera .card 
// • L’element de la classe info del contenidor premium
// • La segona card de hospedaje
// • El formulari per id
// • El primer menú de navegació <nav>

console.log("Exercici 4: QuerySelector");

console.log("La primera .card ");
const card = document.querySelector('.card')
console.log(card);

console.log("L’element de la classe info del contenidor premium");
const info = document.querySelector('.premium .info');
console.log(info);

console.log("La segona card de hospedaje");
const segundoCard = document.querySelector('hospedaje .card:nth-child(2)');
console.log(segundoCard);

console.log("El formulari per id");
const formulario = document.querySelector('#formulario');
console.log(formulario);

console.log("El primer menú de navegació <nav>");
const nav = document.querySelector('nav');
console.log(nav);

