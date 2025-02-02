/* Example
What is closure
Functions are heart of JS and have power to retain the reference of varibales and place when called
Functions as value
Function invocation
Closure examples
Corner cases
Uses
*/

function y(){
 var a = 4;
  function x() {
        console.log(a)
    }
  x()
}
y();

// here x is forming closure - function which has access to parent's scope ( 'a' the reference to the variable) 

/* Closure is a function that has access to the variables and parameters of it's outer function
even after outer function has finished executing.
*****A function bundled together with it's lexical scope *****
Closure = function + Lexical environment */

// Functions are heart of JS, we can pass func as input and return them as well
function x(){
    var a = 4;
     return function y() {
           console.log(a)
       }
     x()
   }
   var z = x();
console.log(z)
/* z has a function y inside it.. suppose there are 1000 of lines and we want to call z(). 
x is gone no longer exists.

functions when returned from another function they maintain their lexical scope.
Closure was returned(function + LE). So, it remembers reference to a.
Where it came from. 
*/