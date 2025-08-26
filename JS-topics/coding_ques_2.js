// Sort array by property
let people =[{'name':'Diana','age': 10},{'name':'Roma','age': 12},{'name':'Oliver','age': 5}] 
function sortByProp(arr,prop){
    return arr.sort((a,b) => a[prop] > b[prop] ? 1 : -1)
}
console.log(sortByProp(people,'age'))

// Find longest word in sentence
function findLongestWord(str){
    let words = str.split(' ')
    return words.reduce((word,longest) => word.length > longest.length ? word : longest , '')
}

console.log(findLongestWord('FIve Little Monkeys Jumping On The Bed'))
//Remove Duplicate from an array 

function removeDuplicate(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicate([1,2,3,4,5,6,6,2]))
