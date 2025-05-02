// catch is a function to handle the failure callback
// whatever errors are there top of catch, it handles happens after catch 
// suppose we want to catch order and proceed further
// ATTACH a callback function (not pass) to promise object to handle the error message

createOrder(cart)
.then(function (orderId){
   return proceedTopayment(orderId) // don't forget to add return statement otherwise it wont work sequentially
})
.catch(function (err){
    console.log(err.message)
})
.then(function(paymentInfo){
   return showOrderSummary(paymentInfo)
}).then(function(paymentInfo){
   return updateWallet(paymentInfo)
})
.catch(function(err){
    console.log(err.message)
})
.then(function(orderId){
    console.log('No matter what happens, I will definitely be called')
})


