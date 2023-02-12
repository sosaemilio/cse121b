const url = "https://pokeapi.co/api/v2/pokemon/";

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

async function getPokemon(pokemon) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (response.ok) {
        let data = await response.json();
        displayPokemon(data);
    } else {
        throw Error(await response.text());
    }
}

function displayPokemon(pokemon) {
    const card = document.createElement("section");
    card.classList.toggle("card");

    // Sprite
    const sprite = document.createElement("img");
    sprite.setAttribute("src", pokemon.sprites.front_default);
    sprite.setAttribute("alt", pokemon.name);
    sprite.style.backgroundColor = typeColors[pokemon.types[0].type.name]

    // Pokemon Name
    const pokemonName = document.createElement("h2");
    pokemonName.textContent = pokemon.name;
    pokemonName.classList.toggle("name");

    //Pokemon ID
    const pokeId = document.createElement("h3");
    pokeId.textContent = `National ID #${pokemon.id};`
    pokeId.classList.toggle("poke-id");
    
    // Types or Element
    const typesContainer = document.createElement("div");
    typesContainer.classList.toggle("type");

    let pokemonType = pokemon.types;
    pokemonType.forEach(type => {
        let typeText = document.createElement("p");
        typeText.textContent = type.type.name;
        typeText.style.backgroundColor = typeColors[type.type.name];
        typesContainer.appendChild(typeText);
    });

    card.append(sprite, pokemonName, pokeId, typesContainer)
    document.querySelector("main").append(card)
}

document.getElementById("search-button").addEventListener("click", () => {
    let pokemon = document.getElementById("search").value.toLowerCase();
    if (pokemon == "") {
        let error = document.createElement("p");
        error.textContent = "Please write a Pokemon";
        error.style.color = "red";
        document.querySelector("#search-bar").append(error);
    } else {
        getPokemon(pokemon); 
    }
})