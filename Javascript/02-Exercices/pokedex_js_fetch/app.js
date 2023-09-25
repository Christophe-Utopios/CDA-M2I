import { fetchPokemonData } from "./utils/utils.js";

let pokemons = [];

fetchPokemonData()
  .then((data) => {
    console.log(data);
    pokemons = data
    displayFirst()
  })
  .catch((error) => {
    console.error(`Erreur lors de la récupération des données: ${error.message}`);
  });

const container = document.querySelector(".container");
const loading = document.getElementById("loading");
const img = document.getElementById("pokemon-img");
const name = document.getElementById("name");
const weight = document.getElementById("weight");
const height = document.getElementById("height");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;



function displayFirst() {
  if (pokemons.length > 0) {
    container.style.display = ""
    loading.style.display = "none"
    // const item = pokemons[currentItem];
    // img.src = item.img;
    // name.textContent = item.name;
    // weight.textContent = item.weight;
    // height.textContent = item.taille;
    showPokemon()
  }
}


function showPokemon() {
  const item = pokemons[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  weight.textContent = item.weight;
  height.textContent = item.taille;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > pokemons.length - 1) {
    currentItem = 0;
  }
  showPokemon();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = pokemons.length - 1;
  }
  showPokemon();
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * pokemons.length);
  showPokemon();
});


window.addEventListener("DOMContentLoaded", function () {
  container.style.display = "none"
});



