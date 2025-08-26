const users = [
  { id: 1, namee: "Alice" },
  { id: 2, namee: "Bob" },
];

/* Output:
{
  1: { id: 1, name: "Alice" },
  2: { id: 2, name: "Bob" },
} */

  let res = {}
  users.forEach((e)=>{
    if(!res.id){
        res[e.id] = {}
    }
    res[e.id] = e;
  })
  console.log(res)


//   or Reduce

const userMap = users.reduce((acc,user) =>{
acc[user.id] = user
return acc
},
{})