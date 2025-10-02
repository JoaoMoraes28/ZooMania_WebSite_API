'use strict'

var search = 'lion'

async function getDataCarousel() {
    let response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${search}`, {
        method: "GET",
        headers: {
            "X-Api-Key": "BRo3//IYzI3r+vHuFr0vHQ==OIT6lfCR1S3Tgpwu"
        }
    })

    let data = await response.json()
    getImageCarousel(data)
}

async function getImageCarousel(data) {
    let images = []

    for (let i = 0; i < data.length; i++) {
        let response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBRYDQ723Pkwu9JtQ0JayMi9KltbZqbxXY&cx=4126a93c66d594c93&q=${data.scientific_name}&searchType=image`)

        let allImages = await response.json()
        images.push(allImages[0].link)

    }

}

function setImagesCarousel() {
    let animal = document.getElementById('animal')
    let habitat = document.getElementById('habitat')


}