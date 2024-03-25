'use strict';

// ! Do not change or remove the next two lines
const rollDie = require('../../helpers/pokerDiceRoller');

async function rollDieUntil(wantedValue) {
  let outCome;
  while (outCome !== wantedValue) {
    try {
      outCome = await rollDie();
      if (outCome === wantedValue) {
        break;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  return outCome;
}

async function main() {
  try {
    const results = await rollDieUntil('ACE');
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDieUntil;
