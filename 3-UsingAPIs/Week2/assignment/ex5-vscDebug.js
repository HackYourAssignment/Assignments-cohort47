'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-5-using-the-vscode-debugger

Use the VSCode Debugger to fix the bugs
--------------------------------------------------------------- --------------*/
const fetch = require('node-fetch');

async function getData(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    throw new Error(`Something went wrong: ${err.message}`);
  }
}

function renderLaureate({ knownName, birth, death }) {
  console.log(`\nName: ${knownName.en}`);
  console.log(`Birth: ${birth.date}, ${birth.place.locationString.en}`);
  if (death) {
    console.log(`Death: ${death.date}, ${death.place.locationString.en}`);
  }
}

function renderLaureates({ laureates }) {
  laureates.forEach(renderLaureate);
}

async function fetchAndRender() {
  const laureates = await getData(
    'http://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
  );
  renderLaureates(laureates);
}

fetchAndRender();
