// ### spread operator vs rest parameter --
/* 1. Spread operator - takes a bunch of items from array and spread them to use individually.
   Use case - spread operator -  Concatenating arrays, passing arrays as arguments [...arr1, ..arr2]

   2. Rest parameter- used in function definition , where we can pass extra agruments to function, 
    gathering arguments to array without altering them. will be the last parameter in function
    parameter list.
    Use Cases - Capturing an arbitrary number of function arguments
    function abc(a, ...rest) {
    return rest;
}
*/

// ## ANAGRAMS
/* LISTEN <===> SILENT
TRIANGLE <==> INTEGRAL
*/

 // sort and compare
let str1 = "LISTEN";
let str2 = "SILENT";

function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  if (
    str1
      .split("")
      .sort()
      .join("")
      .localeCompare(str2.split("").sort().join("")) === 0
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(isAnagrams(str1, str2));

// Custom way
let s1 = "geeksforgeeks"
let s2 = "forgeeksgeeks"

function AreAnagrams(s1, s1) {
  if (s1.length !== s1.length) {
    return false;
  }
  let NO_CHARS = 265;
  let count1 = new Array(NO_CHARS).fill(0)
  let count2 = new Array(NO_CHARS).fill(0)

  s1= s1.split('')
  s2= s2.split('')
  for (let i = 0 ; i< s1.length,i<s2.length;i++){
    count1[s1[i].charCodeAt(0)]++;
    count2[s2[i].charCodeAt(0)]++
  }

  for(let i= 0;i< NO_CHARS;i++){
    if(count1[i] !== count2[i]){
      return false
    }
  }
  return true
}
console.log(AreAnagrams(s1, s2));

/*  Better approach  ##- 
 using map ( find the occurence of characters in first strring and the decrease the count of characters
 when they occur in second string)
 
 -- count the occurrence of characters in str 1
 {d:2,a:1}
 -- now check if th characters occur in string 2, the decrease the count from map
 -- {d:2-1-1;a:1-1} ==> {d:0,a:0}

 so the count will be zero -- means anagram else not
 */

 let one = "dad"
let two = "add"

/* Angel - angle
  car - arc
  net -ten */
function isAnagramsMAP(){
  let map = new Map()
  for(let i = 0; i< one.length;i++){
    map.set(one[i],(map.get(one[i])||0) +1 )
  }

  for(let i =0;i<two.length;i++){
    if(!map.has(two[i])){
      return false
    }
    map.set(two[i],map.get(two[i])-1)
    // check if all the values are zero
  }
  for(let val of map.values()){
    if(val !== 0){
      return false
    }
  }
  return true
}
console.log(isAnagramsMAP(one,two))