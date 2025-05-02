/* When to Use Currying in JavaScript?
 In JavaScript, currying function is used in the following cases:

 Partial Application: 
 In the partial application we set some arguments in advance in the function and 
 call it later with the remaining arguments.
 Higher-Order Functions: When one function takes the other functions as arguments 
 (eg: map, filter, reduce) in that case we can use the currying function to manage the arguments more effectively.
 Functional Programming: Where functions are treated as important and 
 focus is on not changing data and combining functions in those cases currying works perfectly.
 */

 /* 
 Advantages of Currying Function
It helps us to create a higher-order function
It reduces the chances of error in our function by dividing it into multiple smaller functions
 that can handle one responsibility.
It is very useful in building modular and reusable code
It helps us to avoid passing the same variable multiple times
It makes the code more readable
 */

// using closure 
function multiply(x){
    return function(y){
        return x* y
    }
}

let multiplyByThree = multiply(3)
multiplyByThree(2)


// using bind method

let multiplyy = function(x,y){
    return x *y
}

let multiplyByTwo = multiply.bind(this,2)
multiplyByTwo(4)

let mutiplyByFoure = multiply.bind(this,4)
mutiplyByFoure(10)