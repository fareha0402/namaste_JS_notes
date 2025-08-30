/* async keyword is used for making a function handle asynchronous operations
async -await combo -is used to handle promises

What is async -
What is await -
How async await works behind the scene
Examples of using async/await
Error handling
Interviews
Async await vs Promise.then/.catch
*/

// async function will ALWAYS return a PROMISE

// either you return promise or value

// if promise is returned nothing happens
const p = new Promise((resolve,reject) =>{
    resolve('Promise has been resolved')
})

async function getData(){
//  return 'hello' // if value is returned, it will be wrapp the value 
// inside promise and return
return p
}


const data = getData()
console.log(data)
data.then(res => console.log(res))