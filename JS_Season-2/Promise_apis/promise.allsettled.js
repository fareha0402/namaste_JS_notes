/* 2. promise.allsettled */
// ### WAAIT FOvnv R ALL TO SETTLE


Promise.allSettled([p1,p2,p3])-// will return an array with values of all the promises, when resolved/rejected.
[val1,error,val3]// 3s,1s,2s to resolve(all are success)
// 3s,1s(rejected),2s to resolve respectively
 // it will wait for other promises to resolve /rejected
// so after 3s (all the values/error will be given)

/* promise.race return the result of first settled(reject/resolved) promise
- if will return the resukt of first promise(irrespective of resolved , rejected)
*/
Promise.race([p1,p2,p3])- // will return an array with values of all the promises, when resolved/rejected.
[val1,error,val3] // return whatever is first solved.


// promise.any() - wait for first resolved (return result of first settled success Promise)
//## seeking for first success
// it will wait for first success - success seeking race
Promise.any([p1,p2,p3]) // 3s,1s,2s( success,fail,failed)
[val1]
Promise.any([p1,p2,p3]) // 3s,1s,2s( if all failed)
[AggregateError] //an array of errors (collecte all teh errors , it will aggregate errors)
[err1,err2,err3]
