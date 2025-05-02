/* 
Difference between forEach and map in JS
 ### forEach   Vs   ### map
 1.forEach - executes a provided callback function once for each array element without returning a new array. 
 ### map
 1. map - transforms elements and returns a new array.

 2. forEach - . Unlike map(), forEach() always returns undefined and is not chainable.
 2. map() returns transformed array of elements and is chainable.leaving the original array unchanged
 
 3. forEach is used for - logging or modifying elements in place.
 3. map is used for - data manipulation and transformation.
 
 4.Syntax  
 */
let numbers = [1,2,3,4]

numbers.forEach((number) =>{
    console.log(number*2)})   // [2,4,6,8]

const doubledNumbers = numbers.map((number)=>{
    return number*2
})
console.log(doubledNumbers) // [2,4,6,8] 

/*
Q.Does forEach() return a new array like map()?
A.No, forEach() does not return a new array; it simply executes a function for each element in the array.

Q.When should I use map() instead of forEach()?
A.Use map() when you need to transform array elements and return a new array. Use forEach() when you only need to perform actions on each element without returning a new array.

Q.Can forEach() and map() modify the original array?
A.forEach() can modify the original array if the function mutates elements directly. map(), however, returns a new array and does not alter the original array.

Q.Which is faster: forEach() or map()?
A.Performance differences are generally minimal, but map() can be slightly faster when transformations are needed because it is optimized for returning new arrays. However, the choice should be based on functionality rather than speed.

Q.Is map() always better than forEach()?
A.Not necessarily. map() is better when you need a new array of transformed elements, while forEach() is suitable for side effects or actions without returning a result.

 */