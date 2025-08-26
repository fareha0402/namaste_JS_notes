function secondLargestNum(arr){
    let largest = -1;
    let secondLargest = -1

    for(let i=0 ;i<arr.length;i++){
        if(arr[i]> largest){
            secondLargest = largest
            largest = arr[i]
        }
        else if(arr[i] < largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

let arr = [1,2,3,4,5,6,7]
console.log(secondLargestNum(arr))

2.// Reverse Array using loop
let arr1 = [1,2,3,4,5,6,7]
/* op= [7,6,5,4,3,2,1] */

let rev = new Array(arr1.length)
for(let i =0 ,j =(arr1.length)-1; i< arr1.length ;i++ ,j--){
        rev[j] = arr1[i]
}
console.log(rev)

// using temp variable; usinf reverse()
let a = [1,2,3,4,5,6,7]
debugger
for(let i =0 ; i<Math.floor(a.length/2);i++){
let temp = a[i]
a[i] = a[a.length-1-i]
a[a.length-1-i] = temp
}
console.log(a)