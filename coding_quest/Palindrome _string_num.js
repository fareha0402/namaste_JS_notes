/* 121 --- 121
  madam -- madam
  nitin -nitin
--- Pallindrom enumbers
*/

// reverse string and compare

let str1 = 'madam'

function isPalindrome(str){
    for(let i =0 ; i < Math.floor(str.length/2);i++){
        if(str[i] !== str[str.length-1-i]){
            return false
        }
    }
    return true
}
console.log(isPalindrome(str1))