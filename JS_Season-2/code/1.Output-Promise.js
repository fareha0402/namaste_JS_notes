console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => {
    console.log("setTimeout 2");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("Promise 2");
});

console.log("End");
// Start
// End
// Promise 1
// Promise 2
// setTimeout 1
// setTimeout 2
