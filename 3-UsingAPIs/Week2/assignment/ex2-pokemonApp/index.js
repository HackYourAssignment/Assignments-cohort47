'use strict';

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

async function fetchAndPopulatePokemons() {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    const dropDown = document.createElement('select');
    dropDown.style.display = 'block';
    document.body.appendChild(dropDown);

    data.results.forEach((element) => {
      const option = document.createElement('option');
      option.textContent = element.name;
      option.value = element.name;
      dropDown.appendChild(option);
    });

    dropDown.addEventListener('change', (e) => {
      fetchImage(e, data);
    });
  } catch (error) {
    const displayError = document.createElement('h1');
    displayError.textContent = error.message;
    document.body.appendChild(displayError);
  }
}

async function fetchImage(event, data) {
  const pokemon = data.results.find((ele) => ele.name === event.target.value);
  const pokemonData = await fetchData(pokemon.url);
  const imgSrc = pokemonData.sprites.front_default;

  const displayImg = document.createElement('img');
  displayImg.src = imgSrc;
  displayImg.style.display = 'block';
  document.body.appendChild(displayImg);
}

function main() {
  const getPokemon = document.createElement('button');
  getPokemon.type = 'button';
  getPokemon.textContent = 'GetPokemon!';

  document.body.appendChild(getPokemon);

  getPokemon.addEventListener('click', fetchAndPopulatePokemons, {
    once: true,
  });
}

window.addEventListener('load', main);
