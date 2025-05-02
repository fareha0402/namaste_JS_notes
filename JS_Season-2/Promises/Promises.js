/*
We all know that javascript is a synchronous programming language 
but callback functions help to make it an asynchronous programming language.

Initally we used to use callback functions to achieve the async operations
But due to inversion of control, it's not good to use.

So promises come into picture.
 
#### Promises - are objects with some data value
{data:undefined}
{data:{orderDetails}} -- once async operation is done

"The Promise the object represents the eventual
 completion (or failure) of an asynchronous operation and its resulting value."

 Think of a Promise as a placeholder for a value that will be available in the future. 
  It can be in one of 3 states:

"Pending": The task is in the initial state.
"Fulfilled": The task was completed successfully, and the result is available.
"Rejected": The task failed, and an error is provided.
*/
 
const GITHUB_USERS = 'https://api.github.com/users/fareha0402'

const user = fetch(GITHUB_USERS)
console.log(user)
/*
: 
Promise
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"pending"
[[PromiseResult]]
: 
undefined */