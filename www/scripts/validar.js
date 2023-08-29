function validar(maquina) {
    const jugador1 = document.getElementById("jugador1").value;
    const jugador2 = (maquina.length>1)?maquina[maquina.length-1]:maquina[0];
    let response = {
        resultado: "",
        jugada: "",
        robot: ""
    }
    if (jugador1 == "piedra" && jugador2 == "tijera" || jugador1 == "papel" && jugador2 == "piedra" || jugador1 == "tijera" && jugador2 == "papel") {
        response.resultado = "gana";
        maquina.pop();

    } else if (jugador1 == "piedra" && jugador2 == "papel" || jugador1 == "papel" && jugador2 == "tijera" || jugador1 == "tijera" && jugador2 == "piedra") {
        response.resultado = "pierde";
    } else {
        response.resultado = "empate";
        maquina.pop();
    }
    response.jugada = jugador1 + ":" + jugador2;
    response.robot = jugador2;
    return response;
}