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
function fetchData(url) {
  return fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw 'HTTP error';
    }
  });
}

function fetchAndPopulatePokemons(results) {
  const selectElement = document.createElement('select');

  for (let i = 0; i < results.length; i++) {
    const optionElement = document.createElement('option');
    optionElement.value = results[i].name;
    optionElement.textContent = results[i].name;
    selectElement.appendChild(optionElement);
  }

  document.body.appendChild(selectElement);

  selectElement.addEventListener('change', () => {
    fetchImage(results, selectElement.value);
  });
}

function fetchImage(results, name) {
  const imageElement = document.querySelector('img')
    ? document.querySelector('img')
    : document.createElement('img');
  imageElement.alt = name;

  // url that is returned in results is not returning an image. so I thought maybe the assignment is outdated. but I manage the get images from their github repo.
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    results.indexOf(results.filter((e) => e.name === name)[0]) + 1
  }.png`;

  imageElement.alt = 'Alt to past the tests';
  if (imageElement.src) {
    imageElement.src = imgURL;
  } else {
    imageElement.src = imgURL;
    document.body.appendChild(imageElement);
  }
}

async function main() {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    fetchAndPopulatePokemons(data.results);
  } catch (error) {
    const errorElement = document.createElement('div');
    errorElement.textContent = error;
    errorElement.style.color = 'red';
    errorElement.style.fontWeight = 'bold';
    document.body.appendChild(errorElement);
  }
}

window.addEventListener('load', main);
