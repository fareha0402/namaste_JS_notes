/* Sorting - custom
let  numbers = [12, 10, 15, 11, 14, 13, 16];
bubblesort
*/

let numbers = [12, 10, 15, 11, 14, 13, 16];
/* -- [10,12,15,11,14,13,16]
-- [10,12,15,11,14,13,16]
-- [10,12,11,15,14,13,16]
-- [10,12,11,14,15,13,16]
--[10,12,11,14,13,15,16]
-[10,12,11,14,13,15,16]
-[10,11,12,14,13,15,16] */

function bubblesort(a){
    for(let i=0;i<a.length-1;i++){
        for(let j = 0; j< a.length-1-i;j++){
            if(a[j] > a[j+1]){
                let temp = a[j] 
                a[j] = a[j+1]
                a[j+1] = temp
            }
        }
    }
    return numbers
}
console.log(bubblesort(numbers))

/* For Alphabets- sorting */

const words = [
    "JavaScript",
    "Program",
    "to",
    "Sort",
    "Words",
    "in",
    "Alphabetical",
    "Order",
];

function bubbleSortWords(w){
    for(let i =0 ;i< w.length -1; i++){
        for(let j = 0;j<w.length-1-i;j++){
            if(w[j].localeCompare(w[j+1]) >0){
                let temp = w[j]
                w[j] = w[j+1]
                w[j+1] = temp
            }
        }
    }
    return w
}
console.log(bubbleSortWords(words))