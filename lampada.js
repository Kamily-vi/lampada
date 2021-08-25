"use strict"

function ligarLampada(){
    const lampada = document.getElementById("lampada")
    lampada.src = "img/ligada.jpg"
}




// eventos 
document.getElementById('ligar')
    .addEventListener("click", ligarLampada)

