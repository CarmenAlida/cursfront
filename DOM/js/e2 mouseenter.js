// Exercici 2, mouseenter, mouseout
// a) Al entrar al menú de navegació, canviarem el seu estil de backgroundColor= White
// b) Al sortir del menú de navegació, tornarem a deixar l'estil inicial (backgroundColor= 
// transparent )

const nav = document.querySelector('.navegacion');

nav.addEventListener('mouseenter', cambiarFondo);

function cambiarFondo() {
    console.log('ir a navegación');
    nav.style.backgroundColor = 'white';
}


nav.addEventListener('mouseout', ()=>{
    console.log('salir de navegación');
    nav.style.backgroundColor = 'transparent';
})
