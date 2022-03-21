// a) Afegeix un event perquè ens mostri un alert cada vegada que escrivim una lletra al buscador
// b) Afegeix un event perquè ens mostri un alert cada vegada que escrivim la lletra "a" al buscador
// c) El mateix que l'exercici 2, però ara fes servir una funció.

const buscador = document.querySelector('.busqueda');

// buscador.addEventListener('input', () => {
//     alert('hola');
// })

buscador.addEventListener('input', e => {
    if (e.target.value == 'a'){
        alert(' hol A');
    }
})

// buscador.addEventListener('input', leerInput);

// function leerInput(e) {
//     if (e.target.value == 'a') {
//         alert('hol A');
//     }
// }
// window.alert(leerInput)