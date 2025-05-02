// Blocking the main thread

console.log('Start')

setTimeout(function cb(){
    console.log('setTimeout called')
},5000)

console.log('end')
// blocking the thread for 10 ms - run loop for 10ms
// concurrency model

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate +10000){
    endDate = endDate.getTime();
}
console.log('While ends')

// Output will b e 
/* Start
end
while ends
set time out

*/