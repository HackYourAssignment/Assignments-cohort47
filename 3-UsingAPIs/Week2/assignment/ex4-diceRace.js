'use strict';

const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  return Promise.race(dice.map((die) => rollDie(die)));
}

async function main() {
  try {
    const results = await rollDice();
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

// Q. Once you got this working, you may observe that some dice continue rolling
//for some undetermined time after the promise returned by `Promise.race()`
//resolves. Do you know why?
// A. I think it is because, even though the Promise.race() has resolved or rejected with the first resolve or reject it obtained, the others promises continue working, even if their result is going to be ignored.
