
function giveCompliment(name) {
  const compliment=["enough","perfect","strong","beautiful","brave"," inspiring","thoughtful","smart","gorgeous","breathtaking"];
  const randomCompliment = Math.floor(Math.random() * compliment.length); 
 const randomCompliment1 = compliment[randomCompliment];
 return `You are ${randomCompliment1} , ${name} `
}; 

function main() {
  // TODO substitute your own name for "HackYourFuture"
  const myName = 'rasha';
 
console.log(giveCompliment(myName));
console.log(giveCompliment(myName));
console.log(giveCompliment(myName));

const yourName = 'Amsterdam';

console.log(giveCompliment(yourName));
console.log(giveCompliment(yourName));
console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
main();
}
module.exports = giveCompliment;