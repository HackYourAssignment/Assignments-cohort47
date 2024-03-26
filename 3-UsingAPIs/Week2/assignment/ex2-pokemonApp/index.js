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
// Append select field to the document's body
const select = document.createElement('select');
document.querySelector('body').appendChild(select);

// Gets all data aboout pokemons
function fetchData(url) {
  return fetch(url).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error('HTTP error, status = ' + response.status);
  });
}

// Gets every pokemon's name and appends it to the select list
function fetchAndPopulatePokemons() {
  fetchData('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(function (data) {
      for (let i = 0; i < data.results.length; i++) {
        const option = document.createElement('option');
        option.value = data.results[i].name;
        option.textContent = data.results[i].name;
        select.appendChild(option);
      }
    });
}

fetchAndPopulatePokemons();

// Gets every URL with characteristics about every pokemons
const getUrls = fetchData('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(function (data) {
    const urls = data.results.map(result => result.url);
    
    return urls;
  })
  .catch(function (error) {
    return error;
  });

// Looks for sprites in every characteristics URL
getUrls
  .then(function(data) {
    let urlData = [];

    for (let i = 0; i < data.length; i++) {
      let urlElement = fetch(data[i]);
      urlData.push(urlElement);
    }

    return urlData;
  })
  .then(function(data) {
    console.log(data)
  })
  .then(function(data) {
    console.log(data);
  })

  /*
  .then(function(sprites) {
    console.log(sprites.front_default);
  })
  */


  /*
  getUrls
    .then(function(responses) {
      responses.forEach(function(response) {
        console.log(response.sprite)
      });
    });
*/

/*
function fetchImage() {
  
}


function main() {
  // TODO complete this function
}
*/