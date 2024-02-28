'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  // TODO complete this object
  pizza: 3.99,
  chips: 1.09,
  popCorn: 0.99,
  soda: 2.0,
  beer: 1.5,
};

function calculateTotalPrice(chart) {
  // TODO replace this comment with your code
  let totalPrice = 0;
  const value = Object.values(chart);
  value.forEach((value) => {
    totalPrice += value;
  });

  console.log(`Total: € ${totalPrice}`);
  const result = `Total: € ${totalPrice}`;
  return result;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  // TODO replace this comment with your code
  const expected = 1;
  const actual = calculateTotalPrice.length;
  console.assert(actual === expected);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
  const expected = calculateTotalPrice(cartForParty);
  const actual = `Total: € ${Object.values(cartForParty).reduce(
    (acc, val) => acc + val,
    0
  )}`;

  console.assert(actual === expected);
}

function test() {
  test1();
  test2();
}

test();
