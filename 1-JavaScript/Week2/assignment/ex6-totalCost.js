
const cartForParty = {
  beers: 1.75,
  cola: 0.99,
  chips: 2.5,
  pizza: 8.99,
  cake: 4.99,
};


function calculateTotalPrice(cartForParty) {
  const amount = Object.values(cartForParty);
  const totalAmount = amount.reduce((acc,cur)=> {
    return acc+=cur;
   },0)
   return(totalAmount);
 }
 
 // ! Test functions (plain vanilla JavaScript)
 function test1() {
   console.log('\nTest 1: calculateTotalPrice should take one parameter');
   console.assert(calculateTotalPrice.length === 1);
 }
 
 function test2() {
   console.log('\nTest 2: return correct output when passed cartForParty');
   console.assert(JSON.stringify(calculateTotalPrice(cartForParty)) === '8.46');
 }
 
 function test() {
   test1();
   test2();
 }
 test();