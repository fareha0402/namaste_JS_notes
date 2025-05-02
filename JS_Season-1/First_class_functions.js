/* What is first class functions?
What is Anonymous function?
What is function statement, declaration, and expression
Difference between Func statement and func expression - IT IS HOISTING
*/

a();
b(); // this will give error as variable will be undefined 


// ### FUNCTION STATEMENT aka FUNCTION DECLARATION
function a(){
    console.log('a called')
}

// ### FUNCTION EXPRESSION
var b = function(){
    console.log('b called')
}

/* ANONYMOUS FUNCTION - without any name( it doesn;t have it's own identity)
function (){ /// but invalid syntax error as per ES6 we need to give name
console.log('anonymous ')
}
 so anonymous function are used - when functions are used as values - to assign it to variable
 */

 // ## NAMED FUCNTION EXPRESSION - SAME AS FUNCTION EXPRESSION BUT WITH A NAME

 var b1 = function xyz(){
    console.log('named function expression')
 }
 // Differnce between parameters and arguments

//  - identifiers/varibale /labels where we get the values in function declaration aka Parameters
// when we call a function( values which we pass inside function ) aka Arguments

b1();

// FIRST CLASS FUNCTIONS// FIRST CLASS CITIZENS
// -- ability to used as like values,callback functions, returned from functions

// Arrow functions- part of ES6
