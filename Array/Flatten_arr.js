let array = [10, [20, 30], [40, [50, 60]], 70];
/*out:[10,20,30,40,50,60,70]
 */

// using inbuit fun
// console.log(array.flat())

// spread operator and concat
// let a = [...array]
// let res = [].concat(a)

// using recursion
/* 
 - create result array
 -create a function to flat array - closure
 - Iterate over array elements
 - if element is array - again call function 
 - if element is not array ; append the element to res array
 
 */
function flattenArray(arr){
    let res =[]
    function flattenElement(element){
        if(Array.isArray(element)){
            for(let i =0 ;i<element.length;i++){
                flattenElement(element[i])
            }
        }
        else{
            res.push(element)
        }
    }
    flattenElement(arr)
    return res
}

console.log(flattenArray(array))