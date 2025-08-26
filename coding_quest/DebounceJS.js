function debounce(fn,delay){
  let timer 
  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(() =>{
      fn.apply(this,args)
    },delay)
  }
}
let previous= ''
function smartSearchHandler(e) {
  const current = e.target.value
  if(current.length > previous.length){
  console.log('Make API call with query ' + e.target.value)
  }
  // else{
  //   console.log('Backspace detected. No call')
  // }
  previous= current
}
const debounceHandler = debounce(smartSearchHandler,500)
document.getElementById('search').addEventListener('input',debounceHandler)


// <input id='search' type="text" placeholder="Type to search"/>