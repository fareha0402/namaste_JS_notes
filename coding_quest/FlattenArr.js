let input = [1, [2, [3, [4]]]]
// Output: [1, 2, 3, 4]

function flatten(arr) {
  // Recursive solution
  let flatArr= []
  for(let i=0;i<arr.length;i++){
  if(Array.isArray(arr[i])){
     flatArr = flatArr.concat(flatten(arr[i]))
  }
  else{
   flatArr.push(arr[i])   
  }
  }
  return flatArr
}

console.log(flatten(input))
