// Exercici 9: Crear una Nova card
// Amb appendChild crearem una nova card, amb el següent contingut html:
// <div class="card">
//     <img src="img/hacer2.jpg">
//         <div class="info">
//             <p class="categoria concierto">concierto</p>
//             <p class="titulo">Concierto de Rock</p>
//             <p class="precio">$800 por persona</p>
//         </div>
//  </div>

const p1 = document.createElement('P');
p1.textContent = 'Karmen';
p1.classList.add('categoria');
p1.classList.add('concierto');

const p2 = document.createElement('P');
p2.textContent = 'Visita a Karmen';
p2.classList.add('titulo');

const p3 = document.createElement('p');
p3.textContent = '300Bs';
p3.classList.add('precio');

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(p1);
info.appendChild(p2);
info.appendChild(p3);

const imagen = document.createElement('img');
imagen.src = 'img/hacer3.jpg';

const card = document.createElement('div');
card.classList.add('card');

card.appendChild(imagen);

card.appendChild(info);

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);




console.log(p1);
console.log(p2);