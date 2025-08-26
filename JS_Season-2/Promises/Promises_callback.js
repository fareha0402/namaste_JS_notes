/* Definition of Promise:
-"The Promise the object represents the eventual
 completion (or failure) of an asynchronous operation and its resulting value."
- "placeholder untill we receive data for async operation"
- "container for future value"
Promise object can be executed/resolved only once
immutable object
-- Promise has 2 parts- creating and consuming
1. Creation of Promise- pending, fullfilled and rejected states(resolve and reject functions)
*/
let promise = new Promise((resolve, reject) => {
    // Perform async operation
    if (operationSuccessful) {
        resolve('Task successful');
    } else {
        reject('Task failed');
    }
});
/* resolve(value): Marks the promise as fulfilled and provides a result.
 reject(error): Marks the promise as rejected with an error.

 2. Execution of Promises  --
 then()- when success
 catch()- when error
 */
 let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure


    // What is Promise
// Promise object represents eventual completion(failure) of async operation and 
// resulted value 
    //Why Promises are important?
    // solves the callback helll issue, makes the code grow verticall instead of horizontal, 
    // helps error hanldling
    // Promise chaining