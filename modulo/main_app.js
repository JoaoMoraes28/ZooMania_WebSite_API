'use strict'

var buttonPesquisar = document.getElementById('pesquisarMain')
var imgCarroselAnimal = document.getElementById('imgCarroselAnimal')
var imgCarroselHabitat = document.getElementById('imgCarroselHabitat')
var indexCarroselAnimal = 1
const IMG_ANIMAIS = [
    '../img/white_shark.jpeg',
    '../img/canguro.jpeg',
    '../img/cheetah.jpeg',
    '../img/whale.jpeg',
    '../img/wolf.jpeg',
    '../img/aguia.jpeg',
    '../img/tigre.jpeg'
]

function girarCarroselAnimal() {
    if (indexCarroselAnimal == 7) {
        indexCarroselAnimal = 0
    }

    imgCarroselAnimal.src = IMG_ANIMAIS[indexCarroselAnimal]
    definirHabitatAnimal(imgCarroselAnimal.src)
    indexCarroselAnimal++
}

function definirHabitatAnimal(srcImg) {
    if (srcImg.includes("shark")) {
        imgCarroselHabitat.src = '../img/biomaOceanico.jpg'

    } else if (srcImg.includes("canguro")) {
        imgCarroselHabitat.src = '../img/biomaOceania.jpg'

    } else if (srcImg.includes("cheetah")) {
        imgCarroselHabitat.src = '../img/biomaAfricano.jpg'

    } else if (srcImg.includes("whale")) {
        imgCarroselHabitat.src = '../img/biomaOceanico.jpg'

    } else if (srcImg.includes("wolf")) {
        imgCarroselHabitat.src = '../img/biomaAmericano.jpg'

    } else if (srcImg.includes("aguia")) {
        imgCarroselHabitat.src = '../img/biomaAmericano.jpg'

    } else if (srcImg.includes("tigre")) {
        imgCarroselHabitat.src = '../img/biomaAsiatico.jpg'

    }
}

setInterval(girarCarroselAnimal, 5000)

function definirEscopoTexto() {
    let widthWindow = window.innerWidth
    let pTextoPrimeiro = document.getElementById('pPrimeiroContainer')
    let pTextoSegundo = document.getElementById('pSegundoContainer')

    if (widthWindow < 768) {
       pTextoPrimeiro.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae nemo atque aperiam distinctio non consequuntur? Natus vel, beatae quae aliquid porro officiis? Vitae modi soluta excepturi, veniam temporibus ducimus!"
       pTextoSegundo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae nemo atque aperiam distinctio non consequuntur? Natus vel, beatae quae aliquid porro officiis? Vitae modi soluta excepturi, veniam temporibus ducimus!"

    } else if (widthWindow >= 768) {
        pTextoPrimeiro.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae nemo atque aperiam distinctio non consequuntur? Natus vel, beatae quae aliquid porro officiis? Vitae modi soluta excepturi, veniam temporibus ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae nemo atque aperiam distinctio non consequuntur? Natus vel, beatae quae aliquid porro officiis? Vitae modi soluta excepturi, veniam temporibus ducimus!"
        pTextoSegundo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae nemo atque aperiam distinctio non consequuntur? Natus vel, beatae quae aliquid porro officiis? Vitae modi soluta excepturi, veniam temporibus ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, recusandae nemo atque aperiam distinctio non consequuntur? Natus vel, beatae quae aliquid porro officiis? Vitae modi soluta excepturi, veniam temporibus ducimus!"

    } 
}

buttonPesquisar.addEventListener('click', () => {
    let input = document.getElementById('inputMain')
    let animal = input.value

    if (animal == "") {
        alert('Insira algum nome no campo de texto')

    } else {
        window.open(`../cards.html?q=${animal}`, "_self")

    }
})

window.addEventListener('resize', definirEscopoTexto)