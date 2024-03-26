'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

async function fetchAndPopulatePokemons(url) {
  try {
    const data = await fetchData(url);
    const pokemonSelect = document.createElement('select');
    pokemonSelect.id = 'pokemonSelect'; 
    document.body.appendChild(pokemonSelect); 

    data.results.forEach(pokemon => {
      const option = document.createElement('option');
      option.value = pokemon.name;
      option.textContent = pokemon.name;
      pokemonSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error populating Pokémon:', error.message);
  }
}

async function fetchImage(url, imgElement) {
  try {
    const data = await fetchData(url);
    imgElement.src = data.sprites.front_default;
    document.body.appendChild(imgElement); 
  } catch (error) {
    console.error('Error fetching image:', error.message);
  }
}

async function main() {
  const pokemonImage = document.createElement('img');
  pokemonImage.id = 'pokemonImage'; 

  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

  await fetchAndPopulatePokemons(url);

  const pokemonSelect = document.getElementById('pokemonSelect'); 
  pokemonSelect.addEventListener('change', async function () {
    const selectedPokemon = this.value;
    const selectedUrl = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;

    await fetchImage(selectedUrl, pokemonImage);
  });

  document.body.appendChild(pokemonImage); 
}

window.addEventListener('load', main);