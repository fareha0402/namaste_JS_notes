/* Eg of e-commerce website 
*/

//Consuming Promise
const cart = ['shoes','shirt','kurta']
const promise = createOrder(cart);
promise.then(function(orderId){
    console.log(orderId)
})

/* Create Promise - new keyword and PRomise constructor
Promise construction takes functions with 2 paramerts (resolve and reject)
so resolve and reject are functions given by promise api
*/

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        // create Order DB call 
        //validate cart
        //orderID
        if(!validateCart(cart)){
            const err = new Error('Invalid cart')
            reject(err) // if the cart is not valid we will reject it and throw a error
        }
        // we get valid data with order ID
        let orderId = '1234'
        if(orderId){
            // after 5 sec if we want to resolve - setTimeout
            setTimeout(() => {
            resolve(orderId)
            }, 5000);
        }
    })
    return pr
}

function validateCart(cart){
    return true
}
