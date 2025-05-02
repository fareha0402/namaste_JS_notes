/* when we run empty file, JS engine will have a GEC is created and global space
JS engine will create a WIndow object - big objects with variables and functions with global scope
JS also creates a 'this' keyword- this variable
-- global object created is known as Window
JS is used for different purposes eg: servers
this is created for global execution context
this points to window objects for browsers
*/


// Global space - anything not inside a function
 var a = 1
function b (){
    var x = 10
    console.log(x)
}

console.log(window.a)
console.log(this.a)
console.log(a) //same as 18
console.log(x) // error not defined