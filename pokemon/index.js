// fetch this api: "https://pokeapi.co/api/v2/pokemon" and retrive the list of pokemon. Then create for each pokemon a card with an image and the pokemon's name

async function retrivePokemons(url) {
    try {
        const result = await fetch(url)
        const resultJSON = await result.json()
        console.log(resultJSON)
        resultJSON.results.forEach(pokemon => {
            retriveImgPokemon(pokemon)
        });
    }
     catch(error) {
        console.error(error)
     }
}

retrivePokemons("https://pokeapi.co/api/v2/pokemon");

async function retriveImgPokemon(x) {
    try {
        const result = await fetch(x.url)
        const resultJSON = await result.json()
        const pokemonDiv = document.createElement("div")
        pokemonDiv.innerHTML += `${x.name}<br><img src="${resultJSON.sprites.front_default}"/>`
        document.body.appendChild(pokemonDiv)
    } catch(err) {
        console.error(err)
    }
}

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")

btn2.addEventListener("click", () => {
    retrivePokemons("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
})


