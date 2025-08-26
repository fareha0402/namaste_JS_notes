/* Promise chaining helps in achiveing the same behaviour as with callback
but with better handling
*/

//  "return" promise form promise for proper data while chaining

createOrder(cart)
.then(function (orderId){
   return proceedTopayment(orderId) // don't forget to add return statement otherwise it wont work sequentially
}).then(function(paymentInfo){
   return showOrderSummary(paymentInfo)
}).then(function(paymentInfo){
   return updateWallet(paymentInfo)
})

// evenly fashioned vertically growing code- promise chaining
// helps us get out of Callback hellss 