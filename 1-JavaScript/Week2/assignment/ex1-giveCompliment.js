
function giveCompliment(name) {
  const Compliment=["enough","perfect","strong","beautiful","brave"," inspiring","thoughtful","smart","gorgeous","breathtaking"];
  const randomCompliment = Math.floor(Math.random() * Compliment.length); 
 const randomCompliment1 = Compliment[randomCompliment];
 return `You are ${randomCompliment1} , ${name} `
} ; 

console.log(giveCompliment('rasha'));
console.log(giveCompliment('rasha'));
console.log(giveCompliment('rasha'));


// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
