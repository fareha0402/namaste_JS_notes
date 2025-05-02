function outer(){
    var a =10;
    function inner (){
        console.log(a)
    }
    return inner
}
outer()()
// inner func forms closure with it's outer env( it will have access to variables and function to it's parent outer scope)

function outest(){
    let c = 30
    function outer(b){
        let a = 10
        function inner(){
            console.log(a,b,c) // closure
        }
        return inner
    }
    return outer
}
let a = 100
var close = (outest())('hello world')
close()
// 10 hello world 30 -- finds in scope chain
/* Advantages of closure :
-- helps in data hiding and encapsulation 
-- good and scalable (use constructor functions)
*/

function counter(){
    var count = 0;
    return function incrementCounter(){
        count++
        console.log(count)
    }
}

var counter1 = counter()();
var counter2 = counter()
counter2()
counter2()
counter2()
// -- good and scalable (use constructor functions)- with decrement and increment

/*Disadvantages of closure
over use of memory, no garbage collection
memory leaks if not handled properly
*/
// JS is high level program language - garbage collector ()