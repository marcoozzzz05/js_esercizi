// fetch this api: "https://pokeapi.co/api/v2/pokemon" and retrive the list of pokemon. Then create for each pokemon a card with an image and the pokemon's name

const containerCard = document.getElementById("containerCard");

const state = {
  pokemonList: [],
  next: "",
  previous: "",
};

async function retrivePokemons(url) {
  try {
    const result = await fetch(url);
    const resultJSON = await result.json();
    state.next = resultJSON.next;
    state.previous = resultJSON.previous;
    const pokemonList = resultJSON.results;
    state.pokemonList = pokemonList;
    state.pokemonList.forEach(async (pokemon) => {
      const url = pokemon.url;
      const result = await fetch(url);
      const pokemonObj = await result.json();
      const pokemonImg = pokemonObj.sprites.front_default;
      pokemon.imgUrl = pokemonImg;
      render()
    });
    render();
  } catch (error) {
    console.error(error);
  }
}

retrivePokemons("https://pokeapi.co/api/v2/pokemon?limit=10");

function render() {
  containerCard.innerHTML = ""
  state.pokemonList.forEach((pokemon) => {
    console.log(pokemon)
    const pokemonCard = createCard(pokemon.name, pokemon.imgUrl);
    containerCard.appendChild(pokemonCard);
  });
}

function createCard(pokemonName, pokemonImg) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("card");

  const img = document.createElement("img");
  img.setAttribute("src", pokemonImg);

  const span = document.createElement("span");
  span.textContent = pokemonName;

  pokemonCard.appendChild(img);
  pokemonCard.appendChild(span);

  return pokemonCard;
}

// create two buttons to retrive the next ir the previous oage of the pokemon list

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

btn2.addEventListener("click", () => {
    retrivePokemons(state.next)
})

btn1.addEventListener("click", () => {
    retrivePokemons(state.previous);
})