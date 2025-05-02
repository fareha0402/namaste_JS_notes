/* Declaring variables before initialization
AS JS skims through th code in memoery phase and assigns variables - undefined & function - definition
 so there is no error  */

 // Case 1 //
console.log(x)
getName()
console.log(getName)

var x = 7
function getName(){
    console.log('Hello world !!')
}

/* Output ****
undefined
Hello world !!
{
    console.log('Hello world !!')
}
*/ 

// Case 2 //
 console.log(x)
 getName()
 console.log(getName)


 function getName(){
    console.log('Hello world !!')
 }
 /* Output ****
error at line 24
as x is not defined
*/ 