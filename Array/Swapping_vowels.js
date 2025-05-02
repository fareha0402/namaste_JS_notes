/* Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.
var vowels = ['a', 'e', 'i', 'o', 'u'];
Examples:
vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant' */

function vowelShift(sentence){
    let vowels = ['a','e','i','o','u']
    let vowelMap = {
        'a':'e',
        'e':'i',
        'i':'o',
        'o':'u',
        'u':'a'
    }
    let swapSentence = ''
    for(let char of sentence){
        let lowerCaseChar = char.toLowerCase()
        if(vowels.includes(lowerCaseChar)){
            if(char === char.toUpperCase()){
                swapSentence += vowelMap[lowerCaseChar].toUpperCase()
            }
            else{
                swapSentence += vowelMap[char]
            }
        }
        else{
            swapSentence += char 
        }
    }
    return swapSentence
}

console.log(vowelShift('Hello wOrld'))