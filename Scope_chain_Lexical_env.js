/* LEXICAL ENVIRONMENT
   SCOPE
   CLOSURES 
*/

function a(){
    var b = 10
    console.log(x)
    c();
    function c(){
     console.log(b)
    }
}
var x = 1
a();
// console.log(b) // error refeence error not defined

/* scope means where we can access a particular varible or a function in code
- 2 aspects
what is the scope of a variable 'b'
is 'b' inside the scope of function c

scope is directly dependent on lexical environment

whenever EC is created a lexical env is created
Lexical env = local memory + referece to lexical env of parent(lexical parent)(where actually function sits inside)
lexical means in heirarchy 
Whole chanin of LE is known as scope chain
 c has access to scope of a and b
*/
