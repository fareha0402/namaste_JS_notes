/* HOF -  are the functions which take functions as input and return functions as oputput*/
/* Callback functions - are the functions that are passed as input to HOF and are called sometimes back in function definition */
/* Functional Programming - Essence of this is to writr ur code in small small functions . which
helps to achieve DRY,SRP and modulariztion concepts*/
/* Write a polyfill for map  */
/* Write a function to calculate area, circumference and diameter of a circle using Functional Programming(HOF) */


const area = (radius) =>{
   return Math.PI * radius*radius;
}
const diameter = (radius) => {
    return 2*radius;
}
const circumference = (radius) =>{
    return 2* Math.PI*radius
}

const calculate = (radius,logic) =>{
    let output = []
    for(let i = 0; i < radius.length; i++){
         output.push(logic(radius[i]))
    }
    console.log(output)
}
const radius = [1,2,3,4];
// calculate(radius,area);
// calculate(radius,diameter);
// calculate(radius,circumference);
/// Here - calculate is HOF which takes ara,diameter and circumference as call back functions 

Array.prototype.calculatePolyfill = function(logic){
let output1 = [];
debugger
for(let i =0 ; i<this.length; i++){
    output1.push(logic(this[i]))
}
return output1
}
console.log(radius.calculatePolyfill(area))
/// We cannot use this with Arrow function so use normal function