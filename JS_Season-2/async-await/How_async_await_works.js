// lets make Promise act like async operation i.e. after sometime we get the data
const p = new Promise((resolve,reject) => {
   setTimeout(() =>{
    resolve('Promise is resolved')
   },10000)
})

/*Using async await function - to handle promise */
async function handlePromise(){
    // JS Engine was waiting for Promise to resolve
    const val = await p // await is ALWAYS used infront of Promises that is to be resolved
    console.log("Namaste JS")
    console.log(val)
}
handlePromise()


/* Using normal fucntions - promise handling */
function getData(){
    // JS Engine will not wait for promise to resolve - it will execute the next line

    p.then((res) => console.log(res))
    console.log('Namaste JS')
    }
