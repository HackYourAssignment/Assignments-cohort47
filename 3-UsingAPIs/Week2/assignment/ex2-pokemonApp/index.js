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
      throw new Error('HTTP or network errors');
    }
    const pokemon = await response.json();
    return pokemon;
  } catch (error) {
    throw new Error('HTTP or network errors', error);
  }
}

async function fetchAndPopulatePokemons() {
  const select = document.querySelector('.select-pokemon');

  try {
    const pokemons = await fetchData(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );

    pokemons.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.textContent = pokemon.name;
      option.value = pokemon.url;
      select.appendChild(option);
    });
  } catch (error) {
    console.error('Error fetching and populating pokemons:', error);
  }
}

async function fetchImage(event) {
  const selectedPokemonUrl = event.target.value;
  if (!selectedPokemonUrl) {
    throw new Error('Image url in not defined');
  }

  try {
    const pokemonResponse = await fetchData(selectedPokemonUrl);
    const pokemonData = pokemonResponse.sprites.front_default;

    let image = document.getElementById('pokemon-image');
    if (!image) {
      const contentDiv = document.querySelector('.content');
      image = document.createElement('img');
      image.id = 'pokemon-image';
      contentDiv.appendChild(image);
    }
    image.src = pokemonData;
  } catch (error) {
    console.error('Error fetching and displaying image:', error);
  }
}

async function main() {
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');

  const button = document.createElement('button');
  button.textContent = 'GET POKEMON!';
  button.type = 'button';
  button.addEventListener('click', fetchAndPopulatePokemons);
  contentDiv.append(button);

  const select = document.createElement('select');
  select.classList.add('select-pokemon');
  select.addEventListener('change', fetchImage);
  contentDiv.append(select);

  document.body.append(contentDiv);
}

window.addEventListener('load', main);
