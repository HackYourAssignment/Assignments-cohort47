'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollDice()` by using `.map()` on the `dice` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dice continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promises = dice.map((el) => rollDie(el));
  return Promise.race(promises);
}

// Refactor this function to use async/await and try/catch
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

//In the rollDice function, we are creating multiple promises for each die roll.
//rollDice function returns a Promise that resolves or rejects as soon as one of the input Promises resolves or rejects.
//The resolved value is the value of the first Promise in the input array to resolve, or the rejected reason of the first Promise to reject.
//Because of that some dice continue rolling for some undetermined time after the promise returned by `Promise.race()
