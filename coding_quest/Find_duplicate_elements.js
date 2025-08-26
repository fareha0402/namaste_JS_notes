/* let arr = [1,2,3,4,4,5,6,2,4,5,5]

op- [2,4,5]
*/

let arr = [1,2,3,4,4,5,6,2,4,5,5]

function findDuplicate(numList){
    let count = {}
    let duplicate = []

    for(let num of numList){
        count[num] = (count[num] || 0) + 1
    }
     
    for(let num in count){
        if(count[num] >1){
            duplicate.push(Number(num))
        }
    }
    return duplicate;
}

console.log(findDuplicate(arr))