function a(){
    let x = 10;
    function b(){
        console.log(x)
    }
    x = 100
    b()
}
a()

// output will be 100 as reference to 'a' is there in closure, not value

function c(){
    var x = 10;
    function b(){
        var  y =20
        function a(){
            console.log(x,y)
        }   
        y = 30
        a() 
    } b()
}
c()

// function along with access to reference to it's parent variables
// function 'a' forms a closure with scope of 'b'(parent) and 'c'(parent's parent)
// function remembers things
/*  *** Uses of Closure ***
1. Module design pattern
2. Currying
3. Function like once
4. Memoize
5. Maintaining state in 'async' world
6. setTimeouts
7. Iterators 
*/