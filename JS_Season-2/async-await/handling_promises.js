/* if we have normal function, suppose we want to handle promise we will use then and catch.

if we need to use async await to handle promise
*/
 

// function getData(){
// p.then((res) => console.log(res))
// }

const p = new Promise((resolve,reject) => {
    resolve('Promise is resolved')
})

async function handlePromise(){
    const val = await p // await is ALWAYS used infront of Promises that is to be resolved
    console.log(val)
}
handlePromise()

// **** await can only be used inside and async function *****