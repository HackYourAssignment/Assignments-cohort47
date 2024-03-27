'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-die

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDie()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDie()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

function rollDie() {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      if (roll > 6) {
        reject(new Error('Oops... Die rolled off the table.'));
      }

      if (roll === randomRollsToDo) {
        resolve(value);
      }

      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };

    rollOnce(1);
  });
}

function main() {
  rollDie()
    .then((value) => console.log(`Success! Die settled on ${value}.`))
    .catch((error) => console.log(error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

/*
In the original version, when the condition was reached when "Die rolled off the table", the function called both an "error" callback and a "success" callback. This was due to the lack of explicit verification to prevent the "success" callback from being called in case of an error.

In the new version using promises, this problem does not occur, because when the promise goes to the rejected state, the execution of the promise chain ends
*/
