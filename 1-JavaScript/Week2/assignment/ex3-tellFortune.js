'use strict';
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
function selectRandomly(numOfKid, location, name, job) {
  if (numOfKid !== null) {
    const numChild = numOfKid[Math.floor(Math.random() * 5) | 0];

    return numChild;
  }
  if (location !== null) {
    const place = location[Math.floor(Math.random() * 5) | 0];

    return place;
  }
  if (name !== null) {
    const partner = name[Math.floor(Math.random() * 5) | 0];

    return partner;
  }
  if (job !== null) {
    const jobTitle = job[Math.floor(Math.random() * 5) | 0];

    return jobTitle;
  }
}

function tellFortune(kidsNum, namesPartner, locationP, titlesJob) {
  const result = `You will be a ${selectRandomly(
    null,
    null,
    null,
    titlesJob
  )} in ${selectRandomly(null, locationP, null, null)}, 
  married to ${selectRandomly(
    null,
    null,
    namesPartner,
    null
  )} with  ${selectRandomly(kidsNum, null, null, null)} kids.`;

  return result;
}

function createLists(numKids, partnerNames, locations, jobTitles) {
  const partnerNamesList = [
    'Kai',
    'Eliana',
    'Jaden',
    'Ezra',
    'Luca',
    'Rowan',
    'Nova',
    'Amara',
    'Aaliyah',
    'Finn',
  ];

  const locationsList = [
    'Istanbul',
    'Amsterdam',
    'Nijmegen',
    'Arnhem',
    'Madrid',
    'Utrecht',
    'Groningen',
    'Kayseri',
    'Ankara',
    'Berlin',
  ];

  const jobTitlesList = [
    'Doctor',
    'Software Developer',
    'Teacher',
    'Engineer',
    'Astranout',
    'Nurse',
    'Taxi Driver',
    'Worker',
    'Accounter',
    'Lawyer',
  ];
  for (let index = 0; index < 5; index++) {
    numKids.push(Math.floor(Math.random() * 10));
    partnerNames.push(
      partnerNamesList[
        Math.floor((Math.random() * partnerNamesList.length) | 0)
      ]
    );
    locations.push(
      locationsList[Math.floor(Math.random() * locationsList.length) | 0]
    );
    jobTitles.push(
      jobTitlesList[Math.floor((Math.random() * jobTitlesList.length) | 0)]
    );
  }
}

function main() {
  const numKids = [];
  const partnerNames = [];
  const locations = [];
  const jobTitles = [];

  createLists(numKids, partnerNames, locations, jobTitles);

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
