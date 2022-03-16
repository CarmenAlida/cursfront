console.log("Exercici 1: Accedint al document");
// Exercici 1: Accedint al document
// Mostra per consola els següent element DOM: 
// • document
// • body
// • id del formulari
// • el links
// • el className d’algun dels links
// • totes les imatges

let elemento;

console.log("documento");
elemento = document;
console.log(elemento);

console.log("body");
elemento = document.body;
console.log(elemento);

console.log("form");
elemento = document.forms[0].id;
console.log(elemento);

console.log("links");
elemento = document.links;
console.log(elemento);

console.log('imagenes');
elemento = document.images;
console.log(elemento);

console.log("className 2º link");
elemento= document.links[2].className;
console.log(elemento);





