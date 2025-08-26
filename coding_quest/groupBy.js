const users = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
];
function groupBy(arr,key){
    let res={}
    for(let val of arr){
       if(!res[val[key]]){
           res[val[key]] = [val] 
       }
       else{
           res[val[key]].push(val)
       }
    }
    console.log(res)
}
groupBy(users,'role')
// Expected output:
// {
//   admin: [ { name: "A", ... }, { name: "C", ... } ],
//   user:  [ { name: "B", ... } ]
// }
