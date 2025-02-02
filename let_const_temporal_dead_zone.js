
/*
Are let const hoisted???
let and const declaration are hoisted -yes 
they are in temporaldead zone for time being
*/

// console.log(a) "Reference error" - cannot access a before initializations
let a = 10;
var b = 5;

// phase from hoisting till the time let variable is assigned a value - Temporal dead zone
// when we try to access variable in TDZ it gives "Reference error" - cannot access a before initializations
// let variable are also hoisted but in different space ( not in global space)
window.b // fine
window.a // gives error as let and const are in different space(block scoped)
// so let is more strict than var
// if we redeclare - no code is executed; it gives Syntax error(no code is executed rejected upfront)
a =11; // 'Syntax error' No duplicate declaration
// const b = 1000;
//const b; there will be "Syntax error" missing initializer in const declaration
// b = 1000
b = 10000 ; // *** Type Error *** Assignment to a const variable
// *** Type Error Vs Syntax Error Vs Reference Error ***

// To avoid TDZ issue/unexpected errors ; always declare initialize to top of scope
//  So as soon as code starts executing - it hits initialization and avoids an
// so We are shrinking TDZ window to zero by putting everything at top