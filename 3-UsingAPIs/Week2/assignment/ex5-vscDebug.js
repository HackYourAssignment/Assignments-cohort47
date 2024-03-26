'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-5-using-the-vscode-debugger

Use the VSCode Debugger to fix the bugs
--------------------------------------------------------------- --------------*/

const fetch = require('node-fetch');

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

function renderLaureate(laureate) {
  console.log(`\nName: ${laureate.knownName.en}`);
  console.log(`Birth: ${laureate.birth.date}, ${laureate.birth.place.locationString}`);
  if (laureate.death) {
    console.log(`Death: ${laureate.death.date}, ${laureate.death.place.locationString}`);
  }
}

function renderLaureates(laureates) {
  laureates.forEach(renderLaureate);
}

async function fetchAndRender() {
  try {
    const response = await getData(
      'http://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );
    const laureates = response.laureates;
    console.log('laureates:', laureates); 
    renderLaureates(laureates);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
    console.error(err.stack); 
  }
}

fetchAndRender();