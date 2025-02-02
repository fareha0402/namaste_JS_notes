/*
  JS consist of EC execution context to run code
-- It has 2 phase 
1Phase => Where JS skims through the code and assign values to variable and functions
for Variables -- undefined is the special value assigned( placeholder)
for Functions -- entire func definition is assigned

2 Phase => Where the code execution starts
assigning the actual value to variables
** -- When ever a function is invoked a new EC is created --**
done return is execute din function definition that EC is destroyed


*** Call Stack ***
-- Is the stack which run whenever JS code is executed
-- It has GEC (GLobal execution context ) as it's first input
-- As a function is invoked new EC is pushed to the stack and upon return same EC is popped (destroyed)


So Call Stack is stack -- MAINTAINS THE ORDER OF EXECUTION OF EXECUTION CONTEXT ---
AKA ## EXECUTION CONTEXT STACK(EPCRM)
## PROGRAM STACK
## CONTROL STACK
## RUNTIME STACK
## MACHINE STACK
 */

var n =2;
function square (num){
    var ans = num * num
    return ans
}
var square2 = square(n)
var square4 = square(4)

