'use strict';

const { concat, random } = require('lodash');

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-3-be-your-own-fortune-teller

Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments (in the order listed): 
     * the array with the options for the number of children, 
     * the array with the options for the partner's name, 
     * the array with the options for the geographic location and 
     * the array with the options for the job title.
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY principle is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/

// This function should take an array as its parameter and return
// a randomly selected element as its return value.

function selectRandomly(array) {
  const randomIndex = Math.floor(Math.random() * 5);

  const randomKidsNumber = array[randomIndex];
  const randomPartnerName = array[randomIndex + 5];
  const randomLacation = array[randomIndex + 10];
  const randomTitle = array[randomIndex + 15];

  const toldFortune = `You will be a ${randomTitle} in ${randomLacation}, 
  married to ${randomPartnerName} with ${randomKidsNumber} kids.`;

  return toldFortune;
}

function tellFortune(kids, partners, locations, titles) {
  const arrayParam = concat(kids, partners, locations, titles);

  const result = selectRandomly(arrayParam);

  return result;
}

function main() {
  const numKids = [3, 3, 0, 1, 5];
  const partnerNames = ['Kai', 'Eliana', 'Jaden', 'Ezra', 'Luca'];

  const locations = ['Istanbul', 'Amsterdam', 'Nijmegen', 'Arnhem', 'Madrid'];

  const jobTitles = [
    'Doctor',
    'Software Developer',
    'Teacher',
    'Engineer',
    'Astranout',
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
