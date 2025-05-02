// Used for performance improvement
// limit the rate of function call
// Eg: Search bar in flipkart, resize the browser window, button click(Shooting game)

/*Debouncing is used  when we want to make the api call if the difference between the key press is more that some time(200ms)
TO avoid calling api on every key press
SO suppose user is typin slow and(difference between 2 key press is > 200ms ), api call will be made with keyword
for fast typing after 200ms - api call will be made with more keys(keywords)
*/

/* Throttling 
Calling a api call after a certain interval of time.
Eg:Shooting game,resize the browser.

--call the function after 100ms (irrespectibve of key press or events)
*/

const getData = () =>{
    console.log('API call')
}

const debounce = function(fn,delay){
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer)

        timer = setTimeout(()=>{
            fn.apply(context,args)
        },delay)
    }
}
// keypress function will be called on each key press
const keypress =  debounce(getData,300)