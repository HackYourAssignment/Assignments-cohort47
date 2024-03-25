'use strict';

function requestData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw `HTTP ERROR, ${response.status}`;
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(error);
    });
}

function renderImage(data) {
  const image = document.createElement('img');
  image.src = data.img;
  image.alt = 'fetched image';
  document.body.appendChild(image);
}

function renderError(error) {
  const err = document.createElement('h1');
  err.textContent = error.message;
  document.body.appendChild(err);
}

async function main() {
  try {
    const data = await requestData('https://xkcd.now.sh/?comic=latest');
    renderImage(data);
  } catch (error) {
    renderError(error);
  }
}

window.addEventListener('load', main);
