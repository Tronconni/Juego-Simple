function obtenerOpcionUsuario(){
    var opcionUsuario = prompt("Piedra, papel o tijera");
    return opcionUsuario;
}

function obtenerOpcionMaquina(){
    var random = Math.random();
    var opcionMaquinaRandom = random < 0.33 ? 'piedra' : random < 0.66 ? 'papel' : 'tijera';
    return opcionMaquinaRandom;
}

var opcionUsuario = obtenerOpcionUsuario();
    console.log(opcionUsuario);
var opcionMaquinaRandom = obtenerOpcionMaquina();
    console.log(opcionMaquinaRandom);

function obtenerResultadoJuego(opcionUsuario, opcionMaquinaRandom){
    if (opcionUsuario == "piedra") {
        if (opcionMaquinaRandom == "piedra") {
            alert("empate");
            }
        if (opcionMaquinaRandom == "papel") {
            alert("perdio");
            }
        if (opcionMaquinaRandom == "tijera") {
            alert("victoria");
            }
    }
    else
    if (opcionUsuario == "tijera") {
        if (opcionMaquinaRandom == "tijera") {
            alert("empate");
            }
        if (opcionMaquinaRandom == "papel") {
            alert("victoria");
            }
        if (opcionMaquinaRandom == "piedra") {
            alert("perdio");
            }
    }
    else
    if (opcionUsuario == "papel") {
        if (opcionMaquinaRandom == "piedra") {
            alert("victoria");
            }
        if (opcionMaquinaRandom == "papel") {
            alert("empate");
            }
        if (opcionMaquinaRandom == "tijera") {
            alert("perdio");
            }
    }
    }
    obtenerResultadoJuego(opcionUsuario, opcionMaquinaRandom);