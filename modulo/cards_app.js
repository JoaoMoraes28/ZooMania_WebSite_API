'use strict'

// Variáveis de escopo global
var cards = []
var cardDestaque
var atributosCard = []
var buttonPesquisa = document.getElementById('pesquisarCards')
var titulo = document.getElementById('tituloCards')
var close = document.getElementById('close')
var arrowBack = document.getElementById('arrowBack')

var urlSearch = new URLSearchParams(location.search)
var animalByMain = urlSearch.get('q')
titulo.innerHTML = `Resultados para "${animalByMain}"`

// Função para obter os dados do aninal pesquisado na API
async function getDataAnimals(animal) {
    let response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animal}`, {
        headers: {
            "X-Api-Key": 'BRo3//IYzI3r+vHuFr0vHQ==OIT6lfCR1S3Tgpwu'
        }
    })

    let dataAnimal = await response.json()

    if (dataAnimal == 0) {
        titulo.innerHTML = `Nenhum resultado encontrado`

    } else {
        titulo.innerHTML = `Resultados para "${animal}"`
        getImageAnimals(dataAnimal)
        cards.forEach(setEventListener)
    }
}

// Função para obter as imagens dos cards
async function getImageAnimals(data) {
    try {
        let images = []

        for (let i = 0; i < data.length; i++) {
            let response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBRYDQ723Pkwu9JtQ0JayMi9KltbZqbxXY&cx=4126a93c66d594c93&q=${data[i].name} animal&searchType=image`)

            let imagesJson = await response.json()
            images.push(imagesJson.items[0].link)
        }

        createCards(data, images)

    } catch (error) {
        titulo.innerHTML = ``
        alert('Muitas Requisições! Por favor tente novamente mais tarde')
    }

}

// Função para criar e configurar os cards dos animais
function createCards(data, images) {
    // If para que, caso haja um nova busca os cards anteriores serão apagados
    if (cards.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].parentNode.removeChild(cards[i])

        }

        cards = []
    }

    const containerCards = document.getElementById('containerCards')
    let indexId = 1
    let indexImg = 0

    // Atributos dos animais
    const atributosLi = [
        'Classe:',
        'Nome Científico:',
        'Localização:',
        'Dieta:',
        'Presa/Alimento:',
        'Velocidade:',
        'Peso:',
        'Tamanho:',
        'Período de Gestação:'
    ]

    data.forEach((item) => {
        // Elementos que compoem um card
        const card = document.createElement('div')
        const containerImg = document.createElement('div')
        const img = document.createElement('img')
        const pNome = document.createElement('p')
        const divDados = document.createElement('div')
        const listAnimal = document.createElement('ul')
        const listConteudo = document.createElement('ul')

        // Conteúdos dos atributos dos animais
        let liConteudoAnimal = [
            item.taxonomy.class,
            item.taxonomy.scientific_name,
            item.locations,
            item.characteristics.diet,
            item.characteristics.prey,
            item.characteristics.top_speed,
            item.characteristics.weight,
            item.characteristics.length,
            item.characteristics.age_of_weaning
        ]

        // Loop para preencher os dados de cada Card
        for (let i = 0; i < 9; i++) {
            if (liConteudoAnimal[i] == undefined) {


            } else {
                const liAnimal = document.createElement('li')
                const liConteudo = document.createElement('li')

                liAnimal.innerHTML = atributosLi[i]
                liConteudo.innerHTML = liConteudoAnimal[i]

                listAnimal.appendChild(liAnimal)
                listConteudo.appendChild(liConteudo)
            }
        }

        // Definindo elementos Pais e Filhos
        containerCards.appendChild(card)
        card.append(containerImg, pNome, divDados)
        containerImg.appendChild(img)
        divDados.append(listAnimal, listConteudo)

        // Adicionando classes aos elementos
        card.classList.add('card')
        card.id = `card${indexId}`
        containerImg.classList.add('containerImgCard')
        img.classList.add('imgCard')
        pNome.classList.add('nome')
        divDados.classList.add('containerDados')
        listAnimal.classList.add('listaTopicosAnimal')
        listConteudo.classList.add('listaConteudoAnimal')

        // Adicionando imagem e nome ao card
        img.src = `${images[indexImg]}`
        pNome.innerHTML = item.name

        cards.push(card)
        indexId++
        indexImg++
    })

    rowsGrid()
    cards.forEach(setEventListener)
}

// Função para definir quantas linhas a grade Grid irá ter para ocupar todos os cards em diferentes responsividades
function rowsGrid() {
    let container = document.getElementById('containerCards')
    let divisor
    let widthWindow = window.innerWidth

    if (widthWindow < 768) {
        divisor = 3

    } else if (widthWindow >= 768 && widthWindow < 1280) {
        divisor = 4

    } else if (widthWindow >= 1280 && widthWindow < 2100) {
        divisor = 5

    } else if (widthWindow >= 2100) {
        divisor = 6

    }

    let quantLinhasGrid = Math.round((cards.length / divisor) + 1)
    if (quantLinhasGrid == 0) {
        quantLinhasGrid = 1
    }

    // Definir quantidade de rows na grid e a altura do container
    const main = document.getElementById('mainCards')
    const filtroEscuro = document.getElementById('filtroEscuro')
    container.style.gridTemplateRows = `repeat(${quantLinhasGrid},160px)`
    main.style.height = `${(quantLinhasGrid + 1) * 175}px`
    filtroEscuro.style.height = `${(quantLinhasGrid + 1) * 175}px`
}

// Função para adicionar eventListener aos cards para deixá-los destacados 
function setEventListener(card) {
    card.addEventListener('click', () => {
        cardDestaque = event.currentTarget.id

        const filtroEscuro = document.getElementById('filtroEscuro')
        const dadosAnimal = document.querySelector(`#${event.currentTarget.id} .containerDados`)
        const nomeCard = document.querySelector(`#${event.currentTarget.id} .nome`)
        const imgCard = document.querySelector(`#${event.currentTarget.id} .containerImgCard`)

        card.animate(
            [
                { opacity: 0 },
                { opacity: 1 }
            ],
            {
                duration: 300
            }
        )

        // Alterações no card selecionado
        card.style.transition = 'none'
        card.style.pointerEvents = 'none'
        card.style.position = 'absolute'
        dadosAnimal.style.display = 'flex'
        filtroEscuro.style.display = 'flex'
        imgCard.style.height = '25%'
        nomeCard.style.height = '10%'
        nomeCard.style.fontSize = '1.3rem'

        // Código para determinar tamanho do card destacado em diferentes tamanhos de telas
        let widthWindow = window.innerWidth

        if (widthWindow < 768) {
            card.style.width = '97%'
            card.style.height = '870px'

        } else if (widthWindow >= 768 && widthWindow < 1280) {
            card.style.width = '80%'
            card.style.height = '870px'
            card.style.left = '10%'

        } else if (widthWindow >= 1280 && widthWindow < 2100) {
            card.style.width = '60%'
            card.style.height = '870px'
            card.style.left = '20%'
            imgCard.style.width = '55%'

        } else if (widthWindow >= 2100) {
            card.style.width = '50%'
            card.style.height = '870px'
            card.style.left = '25%'
        }
    })

}

// EventListener para o icone de remover destaque do card
close.addEventListener('click', () => {
    let card = document.getElementById(cardDestaque)
    const filtroEscuro = document.getElementById('filtroEscuro')
    let dadosAnimal = document.querySelector(`#${cardDestaque} .containerDados`)
    const nomeCard = document.querySelector(`#${cardDestaque} .nome`)
    const imgCard = document.querySelector(`#${cardDestaque} .containerImgCard`)

    // Atributos para retornar card para seu estado inicial
    card.style.position = 'static'
    card.style.width = '100%'
    card.style.height = '100%'
    dadosAnimal.style.display = 'none'
    filtroEscuro.style.display = 'none'

    // Código para determinar atributos iniciais do card em diferentes tamanhos de telas
    let widthWindow = window.innerWidth

    if (widthWindow < 768) {
        imgCard.style.height = '55%'
        nomeCard.style.height = '45%'
        nomeCard.style.fontSize = '0.7rem'

    } else if (widthWindow >= 768 && widthWindow < 1280) {
        imgCard.style.height = '65%'
        nomeCard.style.height = '35%'
        nomeCard.style.fontSize = '0.8rem'

    } else if (widthWindow >= 1280 && widthWindow < 2100) {
        imgCard.style.height = '60%'
        nomeCard.style.height = '40%'
        nomeCard.style.fontSize = '0.8rem'

    } else if (widthWindow >= 2100) {
        imgCard.style.height = '60%'
        nomeCard.style.height = '40%'
        nomeCard.style.fontSize = '0.8rem'
    }

    //Delay para aplicar a transition novamente ao card para que ele não volte distorcido a sua posição inicial
    setTimeout(() => {
        card.style.transition = '0.6s ease-in-out'
        card.style.pointerEvents = 'auto'
    }, 50)
})

// Função para pesquisar um novo animal na página dos Cards
buttonPesquisa.addEventListener('click', () => {
    let input = document.getElementById('inputCards')
    let animal = input.value

    getDataAnimals(animal)
})

// Função para voltar a página principal
arrowBack.addEventListener('click', () => {
    window.open('https://joaomoraes28.github.io/ZooMania_WebSite_API/index.html', "_self")
})

// Função para responsividade automatica
window.addEventListener('resize', rowsGrid)

getDataAnimals(animalByMain)