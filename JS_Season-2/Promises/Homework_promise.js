/* createOrder, proceedTopayment,showOrderSummary,updateWallet 
4 apis - call them using promise chaining
*/

let cart = ['shirt','kurta','pants','dress']

createOrder(cart)
.then(function(orderId){
    console.log(orderId)
    return proceedTopayment(orderId)
}).catch(function(err){
    console.log(err.message)
}).then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
}).then(function(orderSummary){
    return updateWallet(orderSummary)
})

function createOrder(cart){
    let pr = new Promise(function(resolve,reject){
        if(validateCartItems(cart)){
            resolve(orderId)
        }
        else{
            reject(err)
        }
    })
    return pr
}
function validateCartItems(cart){
    return true
}