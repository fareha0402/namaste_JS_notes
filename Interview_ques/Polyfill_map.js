// Polyfills for map, filter and reduce.
// Polyfill means writing our own implementaion for the above features

let array = [1,2,3,4]
const transformedArr = array.map((n) => {
    return n *2
})
// map(callback(currentValue,indexedDB?,array?),thisargs)

// polyfill for same

Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i=0; i< this.length; i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}

console.log(array.myMap((n,i,array)=>{
    return n *3
}))