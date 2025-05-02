//Naggaro 
function findDuplicate(values){
    debugger
    let res = []
    values.sort();
    for(let i = 0 ; i < values.length; i++){
            if(values[i] === values[i+1] && !res.includes(values[i])){
                res.push(values[i])
            }
    }
    return res
}

let arr = [20,30,33,30,2,20,30]
console.log(findDuplicate(arr))

/// Find the substring from a string with given characters