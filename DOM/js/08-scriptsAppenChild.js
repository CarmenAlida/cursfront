// Exercici 8: Crear un nou link en el menú de Navegació principal
// Amb appendChild crearem una nova opció de navegació en el menú principal

const enlace = document.createElement('A');

enlace.textContent = 'nuevo enlace';

enlace.href = '/nuevo enlace';

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);

console.log(enlace);