/* const nestedArray = [1, [2, 3, [4, 5], 6], [7, 8], 9];
o/p => 9
*/

const nestedArray = [1, [2, 3, [4, 5], 6], [7, 8], 9];

function findLargestNum(nestedArray){

    let largestNum = Number.MIN_SAFE_INTEGER;
    for(let i= 0;i<nestedArray.length;i++){
    if(Array.isArray(nestedArray[i])){
        findLargestNum(nestedArray[i])
    }
    else if(nestedArray[i] > largestNum){
        largestNum = nestedArray[i]
    }
    }
    return largestNum
}

console.log(findLargestNum(nestedArray))