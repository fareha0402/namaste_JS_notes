/* 1. promise.all (For concurrent operation) -all Success 
 -- Suppose we want to handle multiple api calls , multiple promises - we use promise.all
 -- It takes iterable as argument
 */
// #### FAIL FAST TECH ###


 Promise.all([p1,p2,p3])-// will return an array with values of all the promises, when resolved.
 [val1,val2,val3]// 3s,1s,2s to resolve(all are success)
 // so after 3s (wait for all of them to finish)

 /* 2. promise.all (For concurrent operation) -- one of Promise will get rejected
 */
 Promise.all([p1,p2,p3])
 [val1,val2,val3] // 3s,1s(rejected),2s to resolve respectively
 // as soon as any of the promises gets rejected, immediatly after 1s error is thrown
 // it will not wait for other promises to resolve /rejected