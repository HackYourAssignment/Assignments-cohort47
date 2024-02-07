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
  beers: 1.75,
  cola: 0.99,
  apples: 2.5,
  bread: 1.2,
  cake: 12.99,
};

function calculateTotalPrice(cart) {

  // Initialize a variable to store the total price
  let totalPrice = 0;

  // Loop through the properties of the cart object
  for (const item in cart) {
    // Check if the property is not inherited from the prototype chain
    if  (cart.hasOwnProperty(item)) {
      // Add the value of the current property to the total price
      totalPrice += cart[item];
    }
}
return totalPrice;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  // Check if calculateTotalPrice function takes one parameter
  if (calculateTotalPrice.length === 1) {
    console.log('Pass: calculateTotalPrice takes one parameter');
  } else {
    console.error('Fail: calculateTotalPrice does not take one parameter');
  }
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // Expected total price for cartForParty object
  const expectedTotalPrice = 1.75 + 0.99 + 2.5 + 1.2 + 12.99;

  // Call calculateTotalPrice with cartForParty object
  const actualTotalPrice = calculateTotalPrice(cartForParty);

  // Check if the actual total price matches the expected total price
  if (actualTotalPrice === expectedTotalPrice) {
    console.log('Pass: Total price calculated correctly');
  } else {
    console.error('Fail: Total price calculation incorrect');
  }
}

function test() {
  test1();
  test2();
}

test();