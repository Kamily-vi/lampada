"use strict"

function botoesLigaDesliga(estadoLiga, estadoDesliga){
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar= document.getElementById("desligar")
    botaoLigar.disabled = estadoLiga
    botaoDesligar.disabled = estadoDesliga
}

function lampadaQuebrada(){
    const lampada = document.getElementById("lampada")
    return lampada.src.includes("quebrada")
}


function ligarLampada(){
    const lampada = document.getElementById("lampada")

    if (!lampadaQuebrada()){
        lampada.src = "img/ligada.jpg"
       botoesLigaDesliga(true, false)
    }
}

function desligarLampada(){
    const lampada = document.getElementById("lampada")
    
    if (!lampadaQuebrada()){
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
    }
 
}

function quebrarLampada(){
    const lampada = document.getElementById("lampada")
    
    lampada.src = "img/quebrada.jpg"
   botoesLigaDesliga(true, true)

}

function piscarLampada(){
    
}



// eventos 
document.getElementById('ligar')
    .addEventListener("click", ligarLampada)

document.getElementById('desligar')
    .addEventListener("click", desligarLampada)
document.getElementById("lampada")
    .addEventListener("mouseover", ligarLampada)
document.getElementById("lampada")
        .addEventListener("mouseleave", desligarLampada)
document.getElementById("lampada")
        .addEventListener("dblclick", quebrarLampada)



