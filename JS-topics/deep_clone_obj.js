const obj = {
    a:1,
    b:{c:2},
    arr:[1,{d:3}]
}
// deep clone object - recursion
function deepClone(value){
    // check primitive value
    if(value === null || typeof value !== 'object'){
        return value
    }
    // because typeof array returns object
    if(Array.isArray(value)){
        return value.map(item => deepClone(item))
    }
    // else it's object
    let clonedRes = {}
    for(let key in value){
        if(value.hasOwnProperty(key)){
            clonedRes[key] = deepClone(value[key])
        }
    }
    return clonedRes 
}

console.log(deepClone(obj))