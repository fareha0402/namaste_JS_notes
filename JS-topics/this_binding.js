document.getElementById('btn1').addEventListener('click',function(){
  console.log('Normal function', this.id)  
})
document.getElementById('btn2').addEventListener('click',function(){
    console.log('with Bind',this.id)
}.bind({id:'custom'}))

document.getElementById('btn3').addEventListener('click',()=>{
    console.log('Arrow Fn', this.id)
})

/* Normal function in event listener → this refers to the DOM element that fired the event.

Using bind → You can override this with any custom object.

Arrow function → Ignores event’s this. It takes this from the lexical scope
 (e.g., window or the outer function’s this). */

{/* <html>
 <button id="btn1">Normal</button>
<button id="btn2">Bind</button>
<button id="btn3">Arrow</button>

 </html> */}