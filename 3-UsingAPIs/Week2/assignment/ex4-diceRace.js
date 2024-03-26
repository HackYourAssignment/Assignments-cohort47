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
// ! Do not remove this line
const rollDie = require('../../helpers/pokerDiceRoller');

async function rollDice() {
    const dice = [1, 2, 3, 4, 5];

    const promiseArrays = dice.map(async () => {
        try {
            return await rollDie();
        } catch (err) {
            throw new Error(`Failed to roll ${err.message}`);
        }
    });

    const promise = await Promise.race(promiseArrays);
    return promise;
}

async function main() {

    try {
        return await rollDice();
    } catch (err) {
        console.log('Error: ', err);
    }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
    main();
}
module.exports = rollDice;

/*
  the rest of promises keep  executing because Promise.race() does not effect the ongoing tasks after resolving
 */