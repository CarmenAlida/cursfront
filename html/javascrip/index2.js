var personaje = 'Sonic';

function funcionQueDefineUnScopeLocal() {
var nemesis = "Robotnik";
console.log(personaje); // Sonic
console.log(nemesis); // Robotnik
}

console.log(personaje); // Sonic
console.log(nemesis); // undefined

alert("hola mundo");