const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  return Promise.all(dice.map((die) => rollDie(die)));
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

//I think it is because of the setTimeout calling the function after it has already concluded the return with a rejected promise.So, I don't think it is as if the function is working after return, but it is a delayed task that should have been part of the return.
