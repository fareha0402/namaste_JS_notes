function checkIsArrayEqual(a1,a2){
    let freqMap = new Map()
    for(let i=0;i<a1.length;i++){
        freqMap.set(a1[i],(freqMap.get(a1[i]) || 0)+1)
    }
  
    for(let j=0;j<a2.length;j++){
        if(freqMap.has(a2[j])){
            freqMap.set(a2[j],freqMap.get(a2[j])-1)
        }
          console.log(freqMap)
    }
    for(let [key,value] of freqMap){
        if(value !== 0){
            return false
        }
    }
    return true
}

let arr1 = [1,2,3,2]
let arr2 = [2,2,3,1]
console.log(checkIsArrayEqual(arr1,arr2))