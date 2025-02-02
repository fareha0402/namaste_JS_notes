/* What is a block in JS?
-- a block is a pair of curly brackets 
{
}
-- AKA COMPOUND STATEMENT
-- used to combine multiple JS statement into a group
-- eg: we can use multiple statement in a place where JS expects single statement 
*/
{
    var a =10
}
if(true) true // if expects single statement
if(true){ 
    let a = 10;
    const b = 20;
    // we can group multiple statement here (we need block here)
}

/* *** Block Scope ***
variables and functions we can access inside block */
let b = 200 // scipt scope 
{
    var a = 10; // global scope
    let b =20; // are hoisted and are inside block scope
    const c =30; // are hoisted and are inside block scope
    console.log(a) // 10
    console.log(b)// 20
    console.log(c)
}
console.log(a) // global scope
console.log(b) // script scope -200
// console.log(c) /// error 
 // after execution of code ; we cannot access let and const - block scoped; var is global scope

 /* Shadowning && lexical scope chain
 if we have a variable with same name in block ,it shadows th outer variable  
 */ 
var a =10
{
    let a =100 // a is shadowing
    console.log(a)
    {
        let b =10;
        {
            const c =40 
        }
    }
}
console.log(a)
// Illegal shadowing - we can shadown var with let but not let with var
// let z =20
// {
//     var z =20 // illegal shadowing beacuse of scope cannot redclare
// }

// Shadowing works same for function scope
const c = 300 
function x(){
    const c =30
}
x();


// For function keyword and arrow function scope works in same manner- nothing different