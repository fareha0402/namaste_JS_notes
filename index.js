const arr = [
  { firstName: "Adam", age: 2 },
  { firstName: "Oliver", age: 5 },
  { firstName: "Roma", age: 11 },
  { firstName: "Diana", age: 11 },
];


// Task 1 ****
// output : {2:1,6:1,11:2} == how many people with age 
// We wil use reduce here because we want reduce array single object (value)
const output = arr.reduce(function(acc,curr){
    if(acc[curr?.age]){
     acc[curr.age] =  ++acc[curr.age] 
    }
    else {
        acc[curr.age] = 1;
    }
    return acc
},{})
console.log(output)


// Task 2**** Find first name of all the people whose age is less than 6

const nameList = arr.filter((e)=> e.age <6).map((e) => e.firstName )
console.log(nameList)