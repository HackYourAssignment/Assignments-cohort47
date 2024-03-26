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
      console.log(`Error! ${response.status}`);
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      return response.json();
    } 
  } catch (error) {
    console.log(error);
  }
}

function fetchAndPopulatePokemons(url, select, btn) {
  const firstOption = document.createElement('option'); // creates placeholder to indicate a selection must be made)
  firstOption.textContent = 'Please select an option';
  select.appendChild(firstOption);

  btn.addEventListener('click', async () => {
    try {
      const data = await fetchData(url);
      const results = data.results;
  
      results.forEach((result) => {
        const option = document.createElement('option');
        option.textContent = result.name;
        option.value = result.url;
        select.appendChild(option);
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
    const source = data.sprites.front_shiny;
    img.setAttribute('src', source);
    img.setAttribute('alt', data.name);
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const body = document.querySelector('body');
  const btn = document.createElement('button');
  const img = document.createElement('img');
  const select = document.createElement('select');
  btn.textContent = 'Get pokemon list';
  img.setAttribute('id', 'pokemon-img');
  select.setAttribute('class', 'dropdown');

  body.append(btn, select, img);
  
  select.addEventListener('change', (e) => {
    fetchImage(e.target.value)
  });

  fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon?limit=151', select, btn);
}

window.addEventListener('load', main);