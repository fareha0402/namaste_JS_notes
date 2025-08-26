/* 
Callback- advantages and disadvantages
 ## Advantages - used to achieve asynchronous operation
 - async prog exists beacuse of callbacks

 if we want to call somefunction after sometime , we use callbacks: eg setTimeout
*/
const cart = ['shirt','pants','kurta']

api.creatOrder(
  function(){ // callback
    api.proceedToPayment(
        function(){ // callback 
            api.addToWallet()
        }
    )
  }
  // nested callbacks
)

/* 
 ## Disadvantages - If we see there is a problem with the above code 
 1. it has callback hell- code grows horizontally instead of vertical - CALLBACK HELL
 - difficult to maintain,readable
 2. beacuse of structure it's known as ' pyramid of doom in programing '
 3. Inversion of control - IOC
 -lose control of code
- also we give the control of program to createorder API- waiting that the create order function will 
call callback function,sometime but it's risky as we dont have the control to application,
 imp piece to code
-what if callback is never called or called twice, if there are bugs
*/

// 2 issues for callback 

