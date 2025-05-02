let sentence = 'this is a sample'
// o/p - This Is A Sample 

function capitalize(words){
    let arr = []
    for(let val of words){
         arr.push(val.charAt(0).toUpperCase() + val.slice(1))
    }
    return arr
}
let words = sentence.split(' ')
console.log(capitalize(words).join(' '))

// for..of and for..in use 