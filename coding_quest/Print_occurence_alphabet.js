/* let sentence = 'This is a sample text'
   o/p- {'T': 3, 'h': 1, 'i': 2} and so on
*/
let sentence = 'Hello World'
let count = {}
sentence.toLocaleLowerCase()
for( let val of sentence.toLocaleLowerCase()){
    if(val >= 'a' && val<= 'z'){
    count[val] = (count[val] || 0) + 1
    }
}
for(let key in count){
    console.log(`${key} :${count[key]}`)
}