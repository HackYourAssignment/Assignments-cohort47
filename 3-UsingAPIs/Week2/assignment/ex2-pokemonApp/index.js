'use strict';

//let us create some elements globally
const getPokemon = document.createElement('button');
const dropDown = document.createElement('select');

const container = document.createElement('article');
const displayPokemons = document.createElement('section');

container.appendChild(displayPokemons);
document.body.appendChild(getPokemon);
document.body.appendChild(dropDown);
document.body.appendChild(container);

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

async function fetchAndPopulatePokemons() {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');

    data.results.forEach((element) => {
      const option = document.createElement('option');
      option.textContent = element.name;
      option.value = element.name;
      dropDown.appendChild(option);
    });

    dropDown.addEventListener('change', (e) => {
      fetchImage(e, data);
      // Reset the selected value of the dropdown
      e.target.selectedIndex = -1; // Reset to no selection
    });
  } catch (error) {
    const displayError = document.createElement('h1');
    displayError.textContent = error.message;
  }
}

async function fetchImage(event, data) {
  const pokemon = data.results.find((ele) => ele.name === event.target.value);
  const pokemonData = await fetchData(pokemon.url);
  const imgSrc = pokemonData.sprites.front_default;
  displayImage(imgSrc);
}

function displayImage(imgSrc) {
  const selectedPokemon = document.createElement('img');
  selectedPokemon.src = imgSrc;
  displayPokemons.appendChild(selectedPokemon);
}

function main() {
  getPokemon.type = 'button';
  getPokemon.textContent = 'GetPokemon!';

  getPokemon.addEventListener('click', fetchAndPopulatePokemons, {
    once: true,
  });
}

window.addEventListener('load', main);
