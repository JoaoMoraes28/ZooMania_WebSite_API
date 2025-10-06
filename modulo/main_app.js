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

    } else if(srcImg.includes("canguro")) {
        imgCarroselHabitat.src = '../img/biomaOceania.jpg'
        
    } else if(srcImg.includes("cheetah")) {
        imgCarroselHabitat.src = '../img/biomaAfricano.jpg'
        
    } else if(srcImg.includes("whale")) {
        imgCarroselHabitat.src = '../img/biomaOceanico.jpg'
        
    } else if(srcImg.includes("wolf")) {
        imgCarroselHabitat.src = '../img/biomaAmericano.jpg'
        
    } else if(srcImg.includes("aguia")) {
        imgCarroselHabitat.src = '../img/biomaAmericano.jpg'
        
    } else if(srcImg.includes("tigre")) {
        imgCarroselHabitat.src = '../img/biomaAsiatico.jpg'
        
    }
}

setInterval(girarCarroselAnimal, 5000)

buttonPesquisar.addEventListener('click', () => {
    let input = document.getElementById('inputMain')
    let animal = input.value

    window.open(`../cards.html?q=${animal}`, "_self")
})