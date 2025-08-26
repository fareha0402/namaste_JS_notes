// Reduce function accumalator function
/*The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.

array.reduce(function(total, currentValue, currentIndex?, arr?), initialValue)
-- total	Required.
The initialValue, or the previously returned value of the function.
currentValue	Required.
The value of the current element.
currentIndex	Optional.
The index of the current element.
arr	Optional.
The array the current element belongs to.
*/

let numbers = [1,2,3,4,5]

const total = numbers.reduce((acc,i)=>{
    debugger
    let sum = i + acc
    return sum
},0)

console.log(total)

// polyfill for reduce
Array.prototype.myReduce = function(cb,initialValue){
    let accumalator = initialValue;
    // if no initial value then assign first element of array
    for(let i = 0; i< this.length; i++){
        accumalator = accumalator ? cb(accumalator,this[i],i,this): this[i]
    }
    return accumalator

}

const mySum = numbers.myReduce((acc,curr,i,arr) =>{
    return acc + curr
},0)

console.log(mySum)