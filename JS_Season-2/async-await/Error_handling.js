// for async await - we use try catch block to handle error
// traditional ways - catch

const API_URL = 'https://invalidURL'

async function getUserInfo() {
    try{
       const data = await fetch(API_URL)
       const dataValue = await data.json()
       console.log(dataValue)
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log('finally')
    }
    
    
}
getUserInfo()
// old method of handling error, async functions return promise
async function getUserInfo() {
       const data = await fetch(API_URL)
       const dataValue = await data.json()
       console.log(dataValue)
    
}
getUserInfo().catch((err) => console.log(err))

//Both Promises and Async/Await handle asynchronous operations in Node.js,
//  but Async/Await offers a more readable, synchronous-like approach compared to Promises. 
// Promises are useful for chaining .then() and .catch(),
//  while Async/Await simplifies error handling and improves code readability.

