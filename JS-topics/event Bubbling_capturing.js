/* to handle the event propagation for DOM tree 

Bubbling- evnet propagates from inside to out (child -->parent --> grandparent) 
Capturing - event propagates from top to bottom ( GrandParent--> parent --> child)

Used when we want to hadndle event click for dom 
stopPropagation to stop the event flow.
*/

// ### Event Delegation ##

/* 
Concepts uses bubbling.
Insists on adding event handlers to parent div (instead of multiple children)

Eg: we have a website where we have categories , lptps,clothes,shoes as children of parent div 
so add event to parent and when we click the categories(li element by default the event propagates due to bubbling)
and event of parent will be called.

another eg is form, with input element and we want to modify the input to upper case
forms

*/
