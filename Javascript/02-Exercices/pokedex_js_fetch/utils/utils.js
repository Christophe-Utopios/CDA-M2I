import Pokemon from "./../classes/Pokemon.js";

// URL de l'API que nous allons interroger
const apiUrl = "https://pokeapi.co/api/v2/pokemon/"


async function getPokemonInfo(pokemonNumber) {
    try {
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const response = await fetch(apiUrl + pokemonNumber);
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const pokemonData = await response.json();

        return new Pokemon(pokemonData.name, pokemonData.weight, pokemonData.height, pokemonData.types, pokemonData.sprites.front_default)
    } catch (error) {
        console.error(`Erreur lors de la récupération des données pour ${pokemonNumber}: ${error.message}`);
    }
}


export async function fetchPokemonData() {
    const pokemonDataList = [];
    for (let index = 1; index < 151; index++) {
        const pokemonInfo = await getPokemonInfo(index);
        if (pokemonInfo) {
            pokemonDataList.push(pokemonInfo);
        }
    }
    return pokemonDataList;
}


