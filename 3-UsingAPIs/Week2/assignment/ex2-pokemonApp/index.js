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
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return response.json();
}

function fetchAndPopulatePokemons(pokemons) {
  const pkmn = document.getElementById('selectPokemon');
  const img = document.getElementById('pokemonImg');
  if (pkmn) {
    pkmn.remove();
  }
  if (img) {
    img.remove();
  }
  const selectElement = document.createElement('select');
  selectElement.id = 'selectPokemon';

  document.body.appendChild(selectElement);

  pokemons.results.forEach((pokemon) => {
    const selection = document.createElement('option');

    selectElement.appendChild(selection);
    selection.textContent = pokemon.name;
    selection.value = pokemon.name;
  });
  selectElement.addEventListener('change', function () {
    fetchImage(this.value, pokemons);
  });
}

async function fetchImage(pokemonName, pokemons) {
  const emptyImg = document.getElementById('pokemonImg');
  if (emptyImg) {
    emptyImg.remove();
  }

  const pokemonImg = document.createElement('img');
  pokemonImg.id = 'pokemonImg';
  let pokemonUrl = '';

  pokemons.results.forEach((element) => {
    if (element.name === pokemonName) {
      pokemonUrl = element.url;
    }
  });

  const pokemonImgData = await fetchData(pokemonUrl);

  pokemonImg.src = pokemonImgData.sprites.front_default;
  pokemonImg.alt = 'Pokemon Img';
  document.body.appendChild(pokemonImg);
}

async function main() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  const btn = document.createElement('button');
  btn.id = 'btn';
  btn.textContent = 'Get Pokemon!';
  document.body.appendChild(btn);
  const pokemonData = await fetchData(url);

  btn.addEventListener('click', async () => {
    fetchAndPopulatePokemons(pokemonData);
  });
}

window.addEventListener('load', function () {
  main();
});
