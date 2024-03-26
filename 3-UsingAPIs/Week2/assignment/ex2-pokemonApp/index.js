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
// Gets all data aboout pokemons
async function fetchData(url) {
  try {
    const response = await fetch(url);
  
    if (response.ok) {
      return await response.json();
    }

    throw new Error('HTTP error, status = ' + response.status);
  } catch(error) {
    console.log(error);
  }
}

async function fetchAndPopulatePokemons(url, pokemonList, pokemonButton) {
  pokemonButton.addEventListener('click', async function() {
    try {
      const data = await fetchData(url);
      const results = data.results;
  
      results.forEach((result) => {
        const option = document.createElement('option');
        option.textContent = result.name;
        option.value = result.url;
        pokemonList.appendChild(option);
      });
    } catch (error) {
      console.log(error);
    }
  })
  
}

async function fetchImage(url) {
  const img = document.querySelector('img');

  try {
    const data = await fetchData(url);
    const source = data.sprites.other.dream_world.front_default;

    img.src =  source;
    img.alt = data.name;
  } catch (error) {
    console.log(error);
  }
}


function main() {
  const body = document.querySelector('body');

  const select = document.createElement('select');

  const button = document.createElement('button');
  button.textContent = "Get Pokemon";

  const img = document.createElement('img');

  body.append(button, select, img);
  
  select.addEventListener('change', (e) => {
    fetchImage(e.target.value)
  });

  fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon?limit=151', select, button);
}


window.addEventListener('load', main);
