const p1 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('Promise Resolved 1')
    },10000)
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() =>{
    resolve('Promise Resolved 2')
    },5000)
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