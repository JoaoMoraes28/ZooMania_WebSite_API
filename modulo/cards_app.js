'use strict'

var cards = []
var close = document.getElementById('close')
var cardDestaque
var atributosCard = []
var widthCard
var heightCard
var maxWidthCardDestaque
var maxHeightCardDestaque
var maxWidthCards
var maxHeightCards
var buttonPesquisa = document.getElementById('pesquisarCards')
var titulo = document.getElementById('tituloCards')

var urlSearch = new URLSearchParams(location.search)
let animalByMain = urlSearch.get('q')
titulo.innerHTML = `Resultados para "${animalByMain}"`

var animalPrototipo = [
    {
        name: 'American Foxhound',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Canis',
            scientific_name: 'Canis lupus'
        },
        locations: ['North-America'],
        characteristics: {
            distinctive_feature: 'Long legs and wide, flat ears',
            temperament: 'Mix of affectionate, loving, and stubborn',
            training: 'Medium',
            diet: 'Omnivore',
            average_litter_size: '7',
            type: 'Hound',
            common_name: 'American Foxhound',
            slogan: 'Sweet, kind, loyal, and very loving!',
            group: 'Dog',
            color: 'BlackWhiteTan',
            skin_type: 'Hair',
            lifespan: '10 to 12 years'
        }
    },
    {
        name: 'Arctic Fox',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Vulpes',
            scientific_name: 'Vulpes lagopus'
        },
        locations: ['Eurasia', 'Europe', 'North-America'],
        characteristics: {
            main_prey: 'Lemmings, voles, hares, other small rodents, berries, insects',
            name_of_young: 'kit',
            distinctive_feature: 'Thick fur that changes colour with season',
            habitat: 'Polar forest regions',
            predators: 'Snowy Owl, Wolf, Polar Bear',
            diet: 'Carnivore',
            average_litter_size: '5',
            lifestyle: 'Solitary',
            favorite_food: 'Lemmings',
            type: 'Mammal',
            slogan: 'Extremely thick winter fur!',
            color: 'GreyBlackWhite',
            skin_type: 'Fur',
            top_speed: '30 mph',
            lifespan: '7 - 10 years',
            weight: '1.4kg - 9.4kg (3lbs - 21lbs)',
            length: '70cm - 110cm (28in - 43in)'
        }
    },
    {
        name: 'Cross Fox',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Vulpes',
            scientific_name: 'Vulpes vulpes'
        },
        locations: ['North-America'],
        characteristics: {
            prey: 'Birds, small mammals, insects, spiders, worms, reptiles',
            name_of_young: 'Cub, pup, kit',
            group_behavior: 'Solitary',
            estimated_population_size: 'Tens of thousands',
            biggest_threat: 'Humans, wolves, coyotes, mountain lions, eagles, bears',
            most_distinctive_feature: 'The cross on its back.',
            gestation_period: '49 to 55 days',
            litter_size: '5-13 cubs',
            habitat: 'Forests, prairies, deserts, mountains, cities, suburbs, tundra, scrub, near rivers, farms',
            predators: 'Gray wolves, coyotes, eagles, bears, humans and cougars',
            diet: 'Carnivore',
            type: 'mammal',
            common_name: 'cross fox',
            location: 'North America and Canada',
            color: 'RedBlackSilver',
            skin_type: 'Fur',
            top_speed: '31 mph',
            lifespan: '10 to 15 years in captivity, seven years in the wild',
            height: '14 to 20 inches',
            length: '18 to 35 inches with 12 to 22 inch long tails, males a bit larger',
            age_of_sexual_maturity: '10 months',
            age_of_weaning: '56 to 70 days'
        }
    },
    {
        name: 'Darwin’s fox',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Lycalopex',
            scientific_name: 'Lycalopex fulvipes'
        },
        locations: ['South-America'],
        characteristics: {
            prey: 'Small mammals, reptiles, insects and other invertebrates',
            name_of_young: 'Pup, cub, kit',
            group_behavior: 'Solitary',
            estimated_population_size: '639 adults, conservation status endangered',
            biggest_threat: 'Habitat fragmentation, feral and domesticated dogs',
            most_distinctive_feature: 'Its small size',
            'other_name(s)': "Darwin's zorro, zorro chilote, zorro de Darwin",
            gestation_period: 'Perhaps two months',
            litter_size: 'Two to three',
            habitat: 'Temperate rainforests, shrubland',
            diet: 'Omnivore',
            type: 'Mammal',
            number_of_species: '1',
            location: 'Chile',
            color: 'GreyRedBlack',
            skin_type: 'Fur',
            top_speed: '45 mph',
            lifespan: 'Seven years',
            weight: '4 to 8.7 pounds',
            length: '20.79 inches',
            age_of_sexual_maturity: 'About one year',
            age_of_weaning: 'About two months'
        }
    },
    {
        name: 'English Foxhound',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Canis',
            scientific_name: 'Canis lupus'
        },
        locations: ['Europe'],
        characteristics: {
            temperament: 'Friendly, independent, affectionate',
            diet: 'Omnivore',
            color: 'BlackWhiteTanMulti-colored',
            skin_type: 'Hair',
            lifespan: '10 to 13 years',
            weight: '75 pounds'
        }
    },
    {
        name: 'Fennec Fox',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Vulpes',
            scientific_name: 'Vulpes zerda'
        },
        locations: ['Africa', 'Asia'],
        characteristics: {
            prey: 'Berries, Fruit, Rodents, Reptiles',
            name_of_young: 'Kit',
            group_behavior: 'Sociable',
            estimated_population_size: 'Unknown',
            biggest_threat: 'Habitat loss and hunting',
            most_distinctive_feature: 'Large, over-sized ears',
            gestation_period: '52 days',
            habitat: 'Sandy and semi-arid desert',
            diet: 'Omnivore',
            average_litter_size: '3',
            lifestyle: 'Nocturnal',
            common_name: 'Fennec Fox',
            number_of_species: '1',
            location: 'North Africa',
            slogan: 'Found in the African Sahara Desert!',
            group: 'Mammal',
            color: 'WhiteCreamSandy',
            skin_type: 'Fur',
            top_speed: '25 mph',
            lifespan: '10 - 14 years',
            weight: '1kg - 1.5kg (2.2lbs - 3.3lbs)',
            length: '24cm -41cm (9in - 16in)',
            age_of_sexual_maturity: '9 months',
            age_of_weaning: '5 weeks'
        }
    },
    {
        name: 'Fox',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Vulpes',
            scientific_name: 'Vulpes vulpes'
        },
        locations: ['Africa', 'Asia', 'Eurasia', 'Europe', 'North-America'],
        characteristics: {
            main_prey: 'Rabbits, Birds, Lizards',
            distinctive_feature: 'Pointed ears and long bushy tail',
            habitat: 'Woodland areas and urban parks',
            predators: 'Human, Bears, Eagles',
            diet: 'Carnivore',
            average_litter_size: '5',
            lifestyle: 'Solitary',
            favorite_food: 'Rabbit',
            type: 'Mammal',
            slogan: 'There are 12 different species in the world!',
            color: 'BrownRedBlackTan',
            skin_type: 'Fur',
            top_speed: '29 mph',
            lifespan: '3 - 11 years',
            weight: '5kg - 11kg (11lbs - 24lbs)',
            length: '40cm - 83cm (16in - 33in)'
        }
    },
    {
        name: 'Fox Snakes',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Reptilia',
            order: 'Squamata',
            family: 'Colubridae',
            genus: 'Pantherophis',
            scientific_name: 'P. vulpinus and P. ramspotti'
        },
        locations: ['North-America'],
        characteristics: {
            prey: 'Mice, rats, young rabbits, ground-nesting birds and sometimes their eggs, frogs, lizards',
            main_prey: 'Mice and birds',
            name_of_young: 'Hatchling',
            group_behavior: 'Solitary',
            biggest_threat: 'Mistaken identity, roads',
            most_distinctive_feature: 'Copper or bronze-colored head',
            distinctive_feature: 'Strongly patterned alternating blotches down the length of their spine.',
            temperament: 'Shy, but generally docile.',
            litter_size: '6-30',
            predators: 'Foxes, coyotes, hawks.',
            diet: 'Carnivore',
            lifestyle: 'Diurnalor Nocturnal Depending on Region and Season',
            favorite_food: 'Mice',
            common_name: 'Fox snake',
            number_of_species: '-1',
            color: 'BrownGreyBeigeChestnut',
            skin_type: 'Scales',
            lifespan: 'approximately 20 years'
        }
    },
    {
        name: 'Fox Squirrel',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Rodentia',
            family: 'Sciuridae',
            genus: 'Sciurus',
            scientific_name: 'Sciurus niger'
        },
        locations: ['Central-America', 'North-America'],
        characteristics: {
            prey: 'Insects, bird eggs',
            name_of_young: 'Juveniles',
            group_behavior: 'Social',
            biggest_threat: 'Overhunting, forest destruction',
            most_distinctive_feature: 'Large size and large, bushy tail',
            'other_name(s)': "Bryant's fox, eastern fox, stump-eared, racoon, and monkey-faced squirrel",
            gestation_period: '44-45 days',
            litter_size: '2-4',
            habitat: 'Leaf nests and tree dens',
            predators: 'Birds of prey, carnivorous mammals',
            diet: 'Omnivore',
            type: 'rodent',
            common_name: 'fox squirrel',
            number_of_species: '10',
            location: 'Eastern and central United States',
            group: 'social',
            color: 'BrownGrey-Brown',
            skin_type: 'Fur',
            top_speed: '17 mph',
            lifespan: '6-12.6 years',
            length: '21 inches',
            age_of_sexual_maturity: '10-11 months',
            age_of_weaning: '2 months'
        }
    },
    {
        name: 'Fox Terrier',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Canis',
            scientific_name: 'Canis Lupus'
        },
        locations: ['Europe'],
        characteristics: {
            diet: 'Omnivore',
            common_name: 'Fox Terrier',
            slogan: 'First bred in the mid-19th century!',
            group: 'Terrier',
            skin_type: 'Hair',
            lifespan: '14 years',
            weight: '8kg (18lbs)'
        }
    },
    {
        name: 'Golden-Crowned Flying Fox',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Chiroptera',
            family: 'Pteropodidae',
            genus: 'Acerodon',
            scientific_name: 'Acerodon jubatus'
        },
        locations: ['Asia'],
        characteristics: {
            name_of_young: 'Pup',
            group_behavior: 'Group',
            estimated_population_size: '10,000 – 20,000',
            biggest_threat: 'Human hunters',
            most_distinctive_feature: 'Soft golden cap',
            litter_size: 'One',
            habitat: 'Caves and forests',
            predators: 'Reticulated pythons, eagles, humans',
            diet: 'Herbivore',
            favorite_food: 'Figs, leaves, some other fruits',
            common_name: 'Golden crowned flying fox',
            group: 'They live in large gatherings in the woods',
            color: 'BlackGold',
            skin_type: 'Hair',
            lifespan: 'unknown',
            weight: '3.1 pounds',
            height: '7 and 11.4 inches',
            age_of_sexual_maturity: '2 years for females'
        }
    },
    {
        name: 'Gray Fox',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Urocyon',
            scientific_name: 'Urocyon cinereoargenteus'
        },
        locations: ['Central-America', 'North-America', 'South-America'],
        characteristics: {
            prey: 'Rodents, birds, insects, and fruit',
            name_of_young: 'Pups or kits',
            group_behavior: 'SolitaryFamily units',
            estimated_population_size: 'Unknown',
            biggest_threat: 'Hunting and habitat loss',
            most_distinctive_feature: 'The silver gray coat of fur',
            'other_name(s)': 'Tree fox or cat fox',
            gestation_period: '53-63 days',
            litter_size: '1-7 kits',
            habitat: 'Forests and plains',
            diet: 'Omnivore',
            type: 'Mammal',
            common_name: 'Gray Fox',
            number_of_species: '1',
            location: 'North America and northern part of South America',
            color: 'GreyRedBlackWhite',
            skin_type: 'Fur',
            top_speed: '28 mph',
            lifespan: '6-12 years',
            weight: '3.2-6.4kg (7-14lbs)',
            height: '30-40cm (12-16in)',
            length: '89-105cm (35-41in)',
            age_of_sexual_maturity: '10 months',
            age_of_weaning: '2-6 weeks'
        }
    },
    {
        name: 'Kit Fox',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Vulpes',
            scientific_name: 'Vulpes macrotis merriam'
        },
        locations: ['Central-America', 'North-America'],
        characteristics: {
            prey: 'kangaroo rat, cottontail, jackrabbit, reptiles, insects, birds',
            name_of_young: 'pup',
            group_behavior: 'Solitary',
            biggest_threat: 'habitat destruction, competition from coyotes',
            most_distinctive_feature: 'tiny bodies and enormous ears',
            gestation_period: '49 - 55 days',
            litter_size: 'one to seven pups',
            habitat: 'desert, grasslands',
            predators: 'coyotes, bobcats, red foxes, birds of prey',
            diet: 'Omnivore',
            type: 'mammal',
            common_name: 'kit fox',
            number_of_species: '1',
            location: 'Southwest United States, North and Central Mexico',
            group: 'solitary',
            color: 'GreyYellowBlackWhite',
            skin_type: 'Fur',
            top_speed: '25 mph',
            lifespan: 'seven years in the wild. 12 years in captivity',
            weight: '4.5 to five pounds',
            height: 'nine to 12 inches',
            length: '20 inches (body), 12 inches (tail)',
            age_of_sexual_maturity: '10 months',
            age_of_weaning: 'eight weeks'
        }
    },
    {
        name: 'Marble Fox',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Vulpes',
            scientific_name: 'Vulpes vulpes'
        },
        locations: ['North-America'],
        characteristics: {
            prey: 'Rodents, birds, reptiles, insects, and more',
            name_of_young: 'Kits',
            group_behavior: 'Solitary',
            estimated_population_size: 'Unknown',
            biggest_threat: 'Fur industry',
            most_distinctive_feature: 'The marble-colored coat',
            'other_name(s)': 'Canadian marble fox or Arctic marble fox',
            gestation_period: 'Up to 2 months',
            litter_size: '1-13 kits',
            habitat: 'Human captivity',
            predators: 'None in captivity',
            diet: 'Omnivore',
            type: 'Mammal',
            common_name: 'Marble fox',
            number_of_species: '1',
            location: 'Worldwide',
            color: 'BrownBlackWhite',
            skin_type: 'Fur',
            top_speed: '30 mph',
            lifespan: 'Up to 15 years',
            weight: '1-10kg (3-21lbs)',
            height: 'Up to 69cm (27in)',
            length: 'Up to 63cm (25in) in body length, not including the tail',
            age_of_sexual_maturity: '10 months',
            age_of_weaning: '50-70 days'
        }
    },
    {
        name: 'Red Fox',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Vulpes',
            scientific_name: 'Vulpes vulpes'
        },
        locations: ['Africa', 'Asia', 'Europe', 'North-America', 'Oceania'],
        characteristics: {
            prey: 'Rabbits, mice, voles, birds, frogs, fish, eggs, and fruits and vegetables',
            name_of_young: 'Kits or pups',
            group_behavior: 'Family units',
            estimated_population_size: 'Millions',
            biggest_threat: 'Hunting',
            most_distinctive_feature: 'The bushy tail',
            'other_name(s)': 'Silver fox or cross fox',
            gestation_period: '49-55 days',
            litter_size: '1-13',
            habitat: 'Forests, grasslands, tundra, prairie, deserts, and mountains',
            predators: 'Wolves, cougars, lynxes, bobcats, eagles, and owls',
            diet: 'Omnivore',
            average_litter_size: '1-13',
            common_name: 'Red fox',
            number_of_species: '1',
            location: 'North America, Europe, Asia, North Africa, and Australia',
            color: 'BrownGreyRedBlackSilver',
            skin_type: 'Hair',
            top_speed: '31 mph',
            lifespan: '2-4 years in the wild, 10-12 in captivity',
            weight: '6.5-24 lbs',
            height: '16 inches',
            length: '36-42 inches',
            age_of_sexual_maturity: '10 months',
            age_of_weaning: '56-70 days'
        }
    },
    {
        name: 'Smooth Fox Terrier',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Canis',
            scientific_name: 'Canis lupus'
        },
        locations: ['Europe'],
        characteristics: {
            temperament: 'Energetic and curious',
            diet: 'Omnivore',
            color: 'BrownBlackWhiteTan',
            skin_type: 'Hair',
            lifespan: '12 – 15 years',
            height: '18 lbs'
        }
    },
    {
        name: 'Tibetan Fox',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Vulpes',
            scientific_name: 'Vulpes ferrilata'
        },
        locations: ['Asia'],
        characteristics: {
            main_prey: 'pikas, marmots, rodents, lizards, and other small prey',
            name_of_young: 'Kits',
            group_behavior: 'Pair',
            estimated_population_size: '40,000',
            biggest_threat: 'Pika population reduction',
            most_distinctive_feature: 'Square-shaped skull',
            'other_name(s)': 'Tibetan sand fox',
            gestation_period: '50-60 days',
            litter_size: '2-4',
            habitat: 'Tibetan Plateau',
            predators: 'Humans',
            diet: 'Carnivore',
            type: 'Mammal',
            common_name: 'Tibetan fox',
            color: 'GreyTan',
            skin_type: 'Fur',
            top_speed: '44 mph',
            lifespan: '8-10 years',
            weight: '8-12 lbs (4-5 kg)',
            length: '24-28 in (60-70 cm)',
            age_of_sexual_maturity: '1 year',
            age_of_weaning: '5-9 weeks'
        }
    },
    {
        name: 'Toy Fox Terrier',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Canis',
            scientific_name: 'Canis lupus'
        },
        locations: ['North-America'],
        characteristics: {
            temperament: 'Intelligent, friendly, alert, playful, loyal, spirited',
            diet: 'Omnivore',
            color: 'BlackWhiteTanChocolate',
            skin_type: 'Hair',
            lifespan: '11-14 years',
            weight: '13 pounds'
        }
    },
    {
        name: 'Wire Fox Terrier',
        taxonomy: {
            kingdom: 'Animalia',
            phylum: 'Chordata',
            class: 'Mammalia',
            order: 'Carnivora',
            family: 'Canidae',
            genus: 'Canis',
            scientific_name: 'Canis lupus'
        },
        locations: ['Europe'],
        characteristics: {
            temperament: 'Alert, friendly, and confident',
            diet: 'Omnivore',
            color: 'BlackWhiteTan',
            skin_type: 'Hair',
            lifespan: '13 – 14 years',
            weight: '19 lbs'
        }
    },
]

var imagensPrototipo = [
    'https://www.freepik.com/premium-vector/beagle_262566063.htm',
    'https://www.freepik.com/premium-photo/arctic-fox-winter-time-siberian-tundra_14454821.htm',
    'https://www.freepik.com/premium-vector/anchor-fox-logo-vector_238451863.htm',
    'https://www.freepik.com/premium-vector/jackal-drawing-painting_375917222.htm',
    'https://www.freepik.com/premium-photo/dog-standing-rock_103217201.htm',
    'https://www.freepik.com/premium-photo/fennec-fox-desert-fox-close-up-cute-little-fox-sleeping-curled_16641606.htm',
    'https://www.freepik.com/premium-vector/fox-head-logo-branding-concept-vector-illustration-product-company-brand_37073332.htm',
    'https://www.freepik.com/premium-vector/fauna-icon-isometric-vector-creeping-poisonous-coral-snake-near-red-fox-icon-biological-diversity-concept_132235120.htm',
    'https://www.freepik.com/premium-photo/squirrel-field_107965142.htm',
    'https://www.freepik.com/premium-vector/fox-terrier-dog-pretty-pet_4332641.htm',
    'https://www.freepik.com/premium-photo/3d-illustration-fantasy-horse-isolated-black-background-with-clipping-path_76836608.htm',
    'https://www.freepik.com/premium-vector/bat-eared-fox-animal-flat-vector-isolated-illustration-white-background_340530713.htm',
    'https://www.freepik.com/premium-photo/portrait-fox-field_114529136.htm',
    'https://www.freepik.com/premium-vector/art-illustration_43526517.htm',
    'https://www.freepik.com/premium-photo/red-fox-vulpes-vulpes_16832448.htm',
    'https://www.freepik.com/premium-vector/fox-terrier-dog-pretty-pet_4332641.htm',
    'https://www.freepik.com/premium-photo/dog-water_119317136.htm',
    'https://www.freepik.com/premium-photo/yorkshire-terrier-stands-table-against-white-brick-near-beautiful-beads_13571555.htm',
    'https://www.freepik.com/premium-vector/cairn-terrier-icon-clipart-avatar-logotype-isolated-illustration_389388382.htm'
]

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

async function getImageAnimals(data) {
    let images = []

    for (let i = 0; i < data.length; i++) {
        let response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBRYDQ723Pkwu9JtQ0JayMi9KltbZqbxXY&cx=4126a93c66d594c93&q=${data.taxonomy.scientific_name}`)
    
        let imagesJson = await response.json()
        images.push(imagesJson.data[0].url)
    }

    createCards(data, images)

}

function createCards(data, images) {
    if (cards.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].parentNode.removeChild(cards[i])

        }

        cards = []
    }

    const containerCards = document.getElementById('containerCards')
    let indexId = 1
    let indexImg = 0

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
        const card = document.createElement('div')
        const containerImg = document.createElement('div')
        const img = document.createElement('img')
        const pNome = document.createElement('p')
        const divDados = document.createElement('div')
        const listAnimal = document.createElement('ul')
        const listConteudo = document.createElement('ul')

        let liConteudoAnimal = [
            item.taxonomy.class,
            item.taxonomy.scientific_name,
            item.locations[0],
            item.characteristics.diet,
            item.characteristics.prey,
            item.characteristics.top_speed,
            item.characteristics.weight,
            item.characteristics.length,
            item.characteristics.age_of_weaning
        ]

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

        containerCards.appendChild(card)
        card.append(containerImg, pNome, divDados)
        containerImg.appendChild(img)
        divDados.append(listAnimal, listConteudo)

        card.classList.add('card')
        card.id = `card${indexId}`
        containerImg.classList.add('containerImgCard')
        img.classList.add('imgCard')
        pNome.classList.add('nome')
        divDados.classList.add('containerDados')
        listAnimal.classList.add('listaTopicosAnimal')
        listConteudo.classList.add('listaConteudoAnimal')

        pNome.innerHTML = item.name
        img.src = `${images[indexImg]}`
        card.style.maxWidth = `${maxWidthCards}`
        card.style.maxHeight = `${maxHeightCards}`


        let width = 590 / data.length
        let height = 590 / data.length - 13
        card.style.width = `${width}%`
        card.style.height = `${height}%`

        cards.push(card)
        indexId++
    })
    cards.forEach(setEventListener)
}


function setEventListener(card) {
    card.addEventListener('click', () => {
        cardDestaque = event.target.id
        atributosCard.push(card.offsetWidth)
        atributosCard.push(card.offsetHeight)
        const filtroEscuro = document.getElementById('filtroEscuro')
        const dadosAnimal = document.querySelector(`#${event.target.id} .containerDados`)
        const nomeCard = document.querySelector(`#${event.target.id} .nome`)
        const imgCard = document.querySelector(`#${event.target.id} .containerImgCard`)

        card.style.position = 'absolute'
        card.style.maxWidth = `${maxWidthCardDestaque}`
        card.style.maxHeight = `${maxHeightCardDestaque}`
        card.style.width = '100%'
        card.style.height = '100%'
        dadosAnimal.style.display = 'flex'
        filtroEscuro.style.display = 'flex'
        imgCard.style.height = '25%'
        nomeCard.style.height = '10%'
        nomeCard.style.fontSize = '1.3rem'
    })

}

close.addEventListener('click', () => {
    let card = document.getElementById(cardDestaque)
    const filtroEscuro = document.getElementById('filtroEscuro')
    let dadosAnimal = document.querySelector(`#${cardDestaque} .containerDados`)
    const nomeCard = document.querySelector(`#${cardDestaque} .nome`)
    const imgCard = document.querySelector(`#${cardDestaque} .containerImgCard`)

    card.style.position = 'static'
    card.style.width = `${atributosCard[0]}px`
    card.style.height = `${atributosCard[1]}px`
    dadosAnimal.style.display = 'none'
    filtroEscuro.style.display = 'none'
    imgCard.style.height = '65%'
    nomeCard.style.height = '100%'
    nomeCard.style.fontSize = '60%'
    card.style.maxWidth = `${maxWidthCards}`
    card.style.maxHeight = `${maxHeightCards}`
})

function setMaxCardsSize() {
    let containerCards = document.getElementById('containerCards')
    let widthContainer = containerCards.offsetWidth

    if (widthContainer >= 100 && widthContainer <= 723) {
        maxWidthCardDestaque = '95%'
        maxHeightCardDestaque = '100%'
        maxWidthCards = '25%'
        maxHeightCards = '13%'

    } else if (widthContainer >= 724 && widthContainer <= 1209) {
        maxWidthCardDestaque = '80%'
        maxHeightCardDestaque = '90%'
        maxWidthCards = '30%'
        maxHeightCards = '13%'

    } else if (widthContainer >= 1210 && widthContainer <= 1620) {
        maxWidthCardDestaque = '60%'
        maxHeightCardDestaque = '100%'
        maxWidthCards = '24%'
        maxHeightCards = '20%'
    }


}

buttonPesquisa.addEventListener('click', () => {
    let input = document.getElementById('inputCards')
    let animal = input.value

    getDataAnimals(animal)
})
window.addEventListener('resize', setMaxCardsSize)
setMaxCardsSize()
getDataAnimals(animalByMain)