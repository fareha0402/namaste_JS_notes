/* Event loop 
 All the api are given by browser
 We saw the power of browser and APIs
 window is the global object given to us by browser to call stack.

 --- setTimeout
 -- dom apis
 --- fetch
 --- console


 Event loop is like a gate keeper
 that monitors the call stack and callback queue and once the call stack is empty
 it puts callback function from queue to stack for execution.

 All the callback function goes to - callback queue(task queue)
 All the promises and mutation observer goes to - Micro task queue 

 Microtaask queue Vs Callback Queue

 Microtask queue has more priority over callback queue
 So all the task 

 Why we need event loop , ca n't we directly put the callback function to stack
 -- suppose there are multiple callbacks to be executed so we need to keep them in queue and 
 once the main thread is executed
 then event loop puts the callback to main thread for execution.

 As microtask has more priority, suppose there are multiple callback functions
  in queue to be executed
 and callback queue is waiting for long time to get executed --- STARVATION
*/

//## setTimeout APIs
console.log('Start  cb')
setTimeout(function cb(){
    console.log('Settimeout callback function')
},5000)
console.log('End cb')

//##DOM APIs
console.log('start click')
document.getElementById('btn').addEventListener('click', function cbDom(){
    console.log('Event listner callback called')
})
console.log('End click')

//## fetch API

setTimeout(function cbf(){ // callback queue
console.log('set timeout called')
},5000)

fetch('https:api.netflix.com'). // microtask queue
then(function cbF(){
    console.log('Fetch api, promise resolved')
})

