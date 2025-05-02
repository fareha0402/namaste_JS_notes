// JS is synchronous single threaded language 
// when await keyworkd is hit handlePromise execution will suspend for the time it will not block the stack or main thread 
// after the promise is resolved after 5 secs, 
// handlePromise function will start the execution from where it left
// then again it reaches p2 await, handlePromise will suspend and wait for promise to resolve
// after 10 sec when promise is resolved , handlepromise func will again start execution from the line it was suspended
const p1 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('Promise Resolved 1')
    },20000)
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() =>{
    resolve('Promise Resolved 2')
    },40000)
})
// if we reverse the timer the behaviour changes
async function handlePromise(){
    console.log('Hello world')
    // JS engine will wait for promise to get resolved (appears to be waiting)
    const val1 = await p1
    console.log('Namaste JS 1')
    console.log(val1)
    const val2 = await p2
    console.log('Namaste JS 2')
    console.log(val2)
}

handlePromise()

// call is something which cannot be blocked
// in call stack handlePromise is getting out of it when the promise is being called