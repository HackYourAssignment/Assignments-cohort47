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
    console.log('HTTP or network errors');
  }
}

// eslint-disable-next-line no-unused-vars
async function fetchAndPopulatePokemons() {
  const contentDiv = document.querySelector('.content');
  const select = document.querySelector('.select-pokemon');
  console.log('select', select);
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

    contentDiv.appendChild(select);
  } catch (error) {
    console.error('Error fetching and populating pokemons:', error);
  }
}

// eslint-disable-next-line no-unused-vars
async function fetchImage() {
  const selectedPokemonUrl = document.querySelector('.select-pokemon').value;

  if (!selectedPokemonUrl) {
    throw new Error('Image url in not defined');
  }

  try {
    const pokemonResponse = await fetchData(selectedPokemonUrl);
    const pokemonData = pokemonResponse.sprites.front_default;

    const currentImage = document.getElementById('pokemon-image');

    if (currentImage) {
      currentImage.src = pokemonData;
    } else {
      const contentDiv = document.querySelector('.content');
      const image = document.createElement('img');
      image.src = pokemonData;
      image.setAttribute('id', 'pokemon-image');
      contentDiv.appendChild(image);
    }
  } catch (error) {
    console.error('Error fetching and displaying image:', error);
  }
}

async function main() {
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('class', 'content');

  const button = document.createElement('button');
  button.textContent = 'GET POKEMON!';
  button.type = 'button';
  button.setAttribute('onclick', 'fetchAndPopulatePokemons()');
  contentDiv.append(button);

  const select = document.createElement('select');
  select.setAttribute('class', 'select-pokemon');
  select.setAttribute('onchange', 'fetchImage()');
  contentDiv.append(select);

  document.body.append(contentDiv);
}

window.addEventListener('load', main);
