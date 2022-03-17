// Exercici 7: Eliminar elements, removeChild
// a) Eliminem el primer Link que troba ... en aquest cas la opció de menú Vender
// b) Accedir a la class="navegacion" y eliminem la opció de menú Registro´. Eliminem a 
// partir del pare.

// a

const pEnlace = document.querySelector('a');
console.log(pEnlace);
// pEnlace.remove();

const nav1 = document.getElementsByClassName('navegacion');
console.log(nav1[0].children)
// nav1[0].removeChild(nav1[0].children[0]);

const n2 = document.querySelector('.navegación');
console.log(n2.children);
n2.removeChild(n2.children[0]);