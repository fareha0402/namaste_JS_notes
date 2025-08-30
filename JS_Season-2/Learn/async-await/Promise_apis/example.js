const p1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve('P1 success')
    },3000)
})
const p2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve('P2 success')
    },2000)
})
const p3 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        reject('P3 failed')
    },1000)
})

Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch(err => console.error(err)) // error handled else uncaught error by browser if no catch statement

// safest option -- it will give output as OBJECT
Promise.allSettled([p1,p2,p3]).then((res) => {
    console.log(res)
}).catch((err) =>{
    console.error(err)
})

Promise.race([p1,p2,p3]).then((res) => {
    console.log(res)
}).catch((err) =>{
    console.error(err)
})
// first settled(irrespective of fullfilled,resolved, rejected) promise value will be returened
/* Settled means got the  result --> resolved (success/fullfil)
                                 --> rejected (failure/reject)
*/

Promise.any([p1,p2,p3]).then(() =>{
    console.log(res)
}).catch((err) => {
    console.error(err)
})