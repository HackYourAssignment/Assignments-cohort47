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
  // TODO complete this function

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Couldn't fetch.");
    }
    return await response.json();

  } catch (error) {
    throw new Error(error.message);
  }
}

async function fetchAndPopulatePokemons() {
  // TODO complete this function

  const divContainer = document.querySelector('.container');
  const selectEl = document.querySelector('.select-element');
  try {
    const allPokemons = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');

    allPokemons.results.forEach((pokemon) => {
      const option = document.createElement('option');
      option.innerText = pokemon.name;
      option.value = pokemon.url;
      selectEl.appendChild(option);
    });

    divContainer.appendChild(selectEl);
  } catch (error) {
    console.error("Couldn't fetch the data:", error);
  }
}

async function fetchImage() {
  // TODO complete this function

  const pokUrlSelectedOption = document.querySelector('.select-element').value;

  try {
    const responseData = await fetchData(pokUrlSelectedOption);
    const data = responseData.sprites.front_default;

    const curImg = document.getElementById('pokemonImg');

    if (curImg) {
      curImg.src = data;
    } else {
      const divContainer = document.querySelector('.container');
      const img = document.createElement('img');
      img.src = data;
      img.setAttribute('id', 'pokemonImg');
      divContainer.appendChild(img);
    }
  } catch (error) {
    throw new Error(`Couldn't fetch the data: ${error.message}`);
  }
}

async function main() {
  // TODO complete this function

  const divContainer = document.createElement('div');
  const button = document.createElement('button');
  const selectEl = document.createElement('select');

  button.innerText = 'Get Pokemon!';

  divContainer.setAttribute('class', 'container');
  button.addEventListener('click', fetchAndPopulatePokemons);
  
  selectEl.setAttribute('class', 'select-element');
  selectEl.addEventListener('change', fetchImage);

  divContainer.append(button);
  divContainer.append(selectEl);

  document.body.append(divContainer);
}

window.addEventListener('load', main);