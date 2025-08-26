// Reverse the strring 
let str = 'hello'
console.log(str.split('').reverse().join(''))

// Prime Number check
function isPrimeNum(num) {
    if(num === 0 || num === 1) return false
    for( let i = 2; i < Math.sqrt(num);i++){
        if(num % i === 0) return false;
    }
    return true

}
console.log(isPrimeNum(3))

// factorial
function fact(n){
    if(n=== 0 || n === 1) return 1
    return n*fact(n-1)
}

console.log(fact(5))
//flatten a nested array. 

function flattenArr(arr){
    return arr.flat(Infinity)
}

console.log(flattenArr([1,2,3,[4,[5,[6]]]]))


// Write a function to make the following code snippet work? Expert 🚀
console.log(sum(4, 6, 8, 10).value); //output - 28
console.log(sum(4)(6)(8)(10).value); //output - 28


function sum(...args){
    let ans = args.reduce((a,b)=> a+b,0)

    const myFunc = (num) =>{
         return sum(num,...args);
    }
    myFunc.value = ans
    return myFunc
}

console.log(sum(4, 6, 8, 10).value); //output - 28
console.log(sum(4)(6)(8)(10).value); //output - 28