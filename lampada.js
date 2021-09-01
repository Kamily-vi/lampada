"use strict"

const botoesLigaDesliga = (estadoLiga, estadoDesliga) => {
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar= document.getElementById("desligar")
    botaoLigar.disabled = estadoLiga
    botaoDesligar.disabled = estadoDesliga
    
}

let idLigar
let idDesligar

const lampadaQuebrada = () => {
    const lampada = document.getElementById("lampada")
    return lampada.src.includes("quebrada")
}


const ligarLampada = () => {
    const lampada = document.getElementById("lampada")

    if (!lampadaQuebrada()){
        lampada.src = "img/ligada.jpg"
       botoesLigaDesliga(true, false)
    }
}

const desligarLampada = () => {
    const lampada = document.getElementById("lampada")
    
    if (!lampadaQuebrada()){
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
    }
 
}

const quebrarLampada = () => {
    const lampada = document.getElementById("lampada")
    
    lampada.src = "img/quebrada.jpg"
   botoesLigaDesliga(true, true)

}

const pararPiscar = () => {
    clearInterval(idLigar)
    clearInterval(idDesligar)
}

const piscar = () => {
    const botaoPiscar = document.getElementById("piscar")
    if (botaoPiscar.textContent == "Piscar"){
    idLigar = setInterval(ligarLampada, 500)
    idDesligar = setInterval(desligarLampada, 1000)
    document.getElementById("piscar").textContent = "Parar"
    } else{
        pararPiscar()
        botaoPiscar.textContent = "Piscar"
    }
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
document.getElementById("piscar")
        .addEventListener("click", piscar)


