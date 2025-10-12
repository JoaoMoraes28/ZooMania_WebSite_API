'use strict'

// Variáveis de escopo global
var buttonPesquisar = document.getElementById('pesquisarMain')
var imgCarroselAnimal = document.getElementById('imgCarroselAnimal')
var imgCarroselHabitat = document.getElementById('imgCarroselHabitat')
var indexCarroselAnimal = 1
const IMG_ANIMAIS = [
    'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/white_shark.jpeg',
    'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/canguro.jpeg',
    'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/cheetah.jpeg',
    'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/whale.jpeg',
    'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/wolf.jpeg',
    'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/aguia.jpeg',
    'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/tigre.jpeg'
]

// Função para iniciar o carrosel automático de imagens
function girarCarroselAnimal() {
    if (indexCarroselAnimal == 7) {
        indexCarroselAnimal = 0
    }

    imgCarroselAnimal.src = IMG_ANIMAIS[indexCarroselAnimal]
    definirHabitatAnimal(imgCarroselAnimal.src)
    indexCarroselAnimal++
}

// Função para definir a imagem de habitat de cada imagem de animal
function definirHabitatAnimal(srcImg) {
    if (srcImg.includes("shark")) {
        imgCarroselHabitat.src = 'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/biomaOceanico.jpg'

    } else if (srcImg.includes("canguro")) {
        imgCarroselHabitat.src = 'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/biomaOceania.jpg'

    } else if (srcImg.includes("cheetah")) {
        imgCarroselHabitat.src = 'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/biomaAfricano.jpg'

    } else if (srcImg.includes("whale")) {
        imgCarroselHabitat.src = 'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/biomaOceanico.jpg'

    } else if (srcImg.includes("wolf")) {
        imgCarroselHabitat.src = 'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/biomaAmericano.jpg'

    } else if (srcImg.includes("aguia")) {
        imgCarroselHabitat.src = 'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/biomaAmericano.jpg'

    } else if (srcImg.includes("tigre")) {
        imgCarroselHabitat.src = 'https://joaomoraes28.github.io/ZooMania_WebSite_API/img/biomaAsiatico.jpg'

    }
}

setInterval(girarCarroselAnimal, 5000)

// Função para reduzir ou aumentar o conteúdo escrito de acordo com o tamanho da tela
function definirEscopoTexto() {
    let widthWindow = window.innerWidth
    let pTextoPrimeiro = document.getElementById('pPrimeiroContainer')
    let pTextoSegundo = document.getElementById('pSegundoContainer')

    if (widthWindow < 768) {
        let input = document.getElementById('inputMain')
        pTextoPrimeiro.innerHTML = "Cada clique revela curiosidades, histórias e dados fascinantes sobre os animais que compartilham o mundo conosco. Seja você um estudante, pesquisador ou apenas um curioso apaixonado pela natureza, ZooMania é o seu ponto de partida para descobrir o que há de mais incrível na vida selvagem."
        pTextoSegundo.innerHTML = "Se você quiser explorar mais sobre um animal específico, basta digitar o nome dele na aba de pesquisa. Em poucos segundos, o sistema retorna uma série de cards informativos com tudo o que você precisa saber: nome científico, peso médio, tamanho, habitat natural e outras curiosidades fascinantes."

    } else if (widthWindow >= 768) {
        pTextoPrimeiro.innerHTML = "Em cada canto do planeta, a vida pulsa em formas, cores e sons que desafiam a imaginação. Dos felinos que espreitam nas savanas africanas aos minúsculos insetos que dançam nas florestas tropicais, a fauna da Terra é um espetáculo contínuo de adaptação e beleza. ZooMania nasce como uma janela para esse universo selvagem — um projeto educacional que celebra a biodiversidade e convida você a explorar milhares de espécies e seus habitats. Aqui, o aprendizado é uma aventura: cada clique revela curiosidades, histórias e dados fascinantes sobre os animais que compartilham o mundo conosco. Seja você um estudante, pesquisador ou apenas um curioso apaixonado pela natureza, ZooMania é o seu ponto de partida para descobrir o que há de mais incrível na vida selvagem."
        pTextoSegundo.innerHTML = "Se você quiser explorar mais sobre um animal específico, basta digitar o nome dele na aba de pesquisa. Em poucos segundos, o sistema retorna uma série de cards informativos com tudo o que você precisa saber: nome científico, peso médio, tamanho, habitat natural e outras curiosidades fascinantes. É como abrir uma enciclopédia viva, feita sob medida para sua curiosidade. Essas informações são fornecidas por APIs integradas, como a Animals API e a Google Search API, garantindo dados confiáveis e atualizados. A interface foi pensada para ser intuitiva, permitindo que qualquer pessoa — de estudantes a desenvolvedores — navegue com facilidade e mergulhe no universo animal com apenas alguns cliques."

    }
}

buttonPesquisar.addEventListener('click', () => {
    let input = document.getElementById('inputMain')
    let animal = input.value

    if (animal == "") {
        alert('Insira algum nome no campo de texto')

    } else {
        window.open(`https://joaomoraes28.github.io/ZooMania_WebSite_API/cards.html?q=${animal}`, "_self")

    }
})

definirEscopoTexto()
// Função para atualizar o texto utilizando o resize
window.addEventListener('resize', definirEscopoTexto)