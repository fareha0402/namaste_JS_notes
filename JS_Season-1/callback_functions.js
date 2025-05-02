/* 
Func are first class citizens means it can be passed as a value to another function
so call back functions are functions which are passed to another function.

- these give access to async world

JS is synchronous single threaded language

*/

function x(y){
console.log('x is called')
y()
}

x(function y(){
console.log('y')
});

// here y is call back function-- which will be calles after sometime
setTimeout(function(){
console.log('timer')
},5000)

// blocking the main thread (we shouldn't block the main thread )
// power of callback
// Deep about eEvent Listners
// closure with event listneres
// scope demo with event listners


// how to create closure with event listeners - counter to find the no of times button is clicked   
function attachEventListener(){
    let count = 0;
    document.getElementById('btn').addEventListener('click', function(){
        console.log('button clicked', ++count)
    })
}

attachEventListener();
// go to inspect- button -event handlers - scope - (global & closure)