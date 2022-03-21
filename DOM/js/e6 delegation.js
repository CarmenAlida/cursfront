// Les següents variables recullen información de la primera card

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// Afegeix un eventListener, per tal de que capturi el click de cada un d’ells. I escrigui en 
// consola un missatge corresponent a cada event
// Que pasa?, com ho podem evitar?


cardDiv.addEventListener('click', (event) => {
    let element = event.target.className;

    switch (element) {
        case 'categoria concierto':
            console.log('categoria concierto');
            event.stopPropagation();
            break;
        case 'precio':
            console.log('precio');
            event.stopPropagation();
            break;
        case 'titulo':
            console.log('titulo');
            event.stopPropagation();
            break;
        default:
            console.log('CARD');
            event.stopPropagation();
    }
});