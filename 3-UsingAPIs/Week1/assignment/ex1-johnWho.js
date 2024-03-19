'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-1-john-who

Rewrite this function, but replace the callback syntax with the Promise syntax:
- Have the `getAnonName` function return a `new Promise`.
- If the Promise `resolves`, pass the full name as an argument to resolve with.
- If the Promise `rejects`, pass an error as the argument to reject with: "You 
  didn't pass in a first name!"
------------------------------------------------------------------------------*/

const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject("You didn't pass in a first name!");
      } else {
        const fullName = `${firstName} Doe`;
        resolve(fullName);
      }
    }, 1000);
  });
};

function main() {
  const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };

  const handleFailure = (rejectReason) => {
    console.log(rejectReason);
  };
  getAnonName('John').then(handleSuccess, handleFailure);
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = getAnonName;
