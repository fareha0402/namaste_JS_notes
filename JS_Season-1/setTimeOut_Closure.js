/* setTimeout uses closure - it has a callback function which forms closure with the outer scope
so the callback function has reference to it's parent/outer function variable.

SetTimeout runs the timer and when the timer expires it will call the callback function
 with refence to 'i'
*/

function x(){
    var i =1;
    setTimeout(function(){ // closure with reference to variable 'i'
        console.log(i)
    },1000)
}
console.log('hello')
// x();
// Print 1 to 5 after every one second using 'var'
function y(){
    for(var i = 1; i <= 5; i++){
    // for(let i = 1; i <= 5; i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
        
    }
}
// y(); // output will be 6; copy of 'i' reference to variable refers to same copy every time
// if we use let - it will work as it's block scope so every time a new copy of i is created and closure has access to it
 function z(){
        for(var i = 1; i <= 5; i++){
            function close(x){
            setTimeout(()=>{
                console.log(x)
            },x*1000)
        }
        close(i)
    }
    
}
z()
// We can solve the issue by using function- as function will have block scope so {closures }
// everytime we call the func closure with value of i a new copy of it will be created solving the problem 