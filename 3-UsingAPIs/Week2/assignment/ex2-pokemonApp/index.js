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

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Rejected!', error.message);
    throw error;
  }
}

async function fetchAndPopulatePokemons() {
  try {
    const pokemonData = await fetchData(url);

    const selectElement = document.createElement('select');
    selectElement.id = 'pokemon-select';

    pokemonData.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });

    document.body.appendChild(selectElement);

    selectElement.addEventListener('change', async (event) => {
      const selectedPokemonUrl = event.target.value;
      await fetchImage(selectedPokemonUrl);
    });
  } catch (error) {
    console.error('Error fetching and populating pokemons:', error.message);
  }
}

async function fetchImage(url) {
  try {
    const existingImage = document.getElementById('pokemon-image');
    if (existingImage) {
      existingImage.remove();
    }

    const pokemonData = await fetchData(url);
    const pokemonImage = pokemonData.sprites.front_default;

    const imgElement = document.createElement('img');
    imgElement.src = pokemonImage;
    imgElement.alt = 'Pokemon Image';
    imgElement.id = 'pokemon-image';

    document.body.appendChild(imgElement);
  } catch (error) {
    console.error('Error fetching image:', error.message);
  }
}

function main() {
  const button = document.createElement('button');
  button.id = 'button';
  button.innerText = 'Choose Pokemon';

  document.body.appendChild(button);

  button.addEventListener('click', async () => {
    const selectElement = document.getElementById('pokemon-select');
    if (!selectElement) {
      await fetchAndPopulatePokemons();
    } else {
      const selectedPokemonUrl = selectElement.value;
      await fetchImage(selectedPokemonUrl);
    }
  });
}

window.addEventListener('load', main);
