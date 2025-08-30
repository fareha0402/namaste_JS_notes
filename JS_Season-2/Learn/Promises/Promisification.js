/* “Promisification” is a long word for a simple transformation. 
It’s the conversion of a function that accepts a callback into a function that returns a promise.

Such transformations are often required in real-life, as many functions and libraries are 
callback-based. But promises are more convenient, so it makes sense to promisify them.

https://www.freecodecamp.org/news/write-your-own-promisify-function-from-scratch/

How to make callback-based functions return a promise
There are two ways to do it:

Wrap the function in another function which returns a promise. It then resolves or rejects based on callback arguments.
Promisification — We create a util/helper function promisify which will transform all error first callback-based APIs.

 */
const getSumAsync = (num1, num2, callback) => {

  if (!num1 || !num2) {
    return callback(new Error("Missing arguments"), null);
  }
  return callback(null, num1 + num2);
}
getSumAsync(1, 1, (err, result) => {
  if (err){
    doSomethingWithError(err)
  }else {
    console.log(result) // 2
  }
})

// 
const { promisify } = require('util')
const getSumPromise = promisify(getSumAsync) // step 1
getSumPromise(1, 1) // step 2
.then(result => {
  console.log(result)
})
.catch(err =>{
  doSomethingWithError(err);
})


const myPromisify = (fn) => {
   return (...args) => {
     return new Promise((resolve, reject) => {
       function customCallback(err, ...results) {
         if (err) {
           return reject(err)
         }
         return resolve(results.length === 1 ? results[0] : results) 
        }
        args.push(customCallback)
        fn.call(this, ...args)
      })
   }
}
