Function.prototype.myapply = function(context={},args=[]){
    if(typeof this !== 'function'){
        throw new TypeError(this,'not a function.Not callable') 
    }
    if(!Array.isArray(args)){
        throw new TypeError('Arguments must be an array')
    }
    const fn = Symbol('fn') // unique property
    context[fn] = this // temporarily attach fn
    let res = context[fn](...args) // call the function with args
    delete context[fn]
    return res
    
}
function greet(greetings,punctuation){
    console.log(`${greetings} GM ${punctuation} You are 
    ${this.role}`)
}
let person = {role: 'FE developer'}

greet.myapply(person,['Fareha','!'])
