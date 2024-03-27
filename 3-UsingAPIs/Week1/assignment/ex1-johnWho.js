'use strict';

const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
        return;
      }

      const fullName = `${firstName} Doe`;
      resolve(fullName);
    }, 1000);
  });
};
function main() {
  getAnonName('John')
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = getAnonName;
