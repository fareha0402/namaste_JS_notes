Function.prototype.mycall = function(context= {},...args){
    if(typeof this !== 'function'){
        throw new TypeError(this,'not a function.not callable')
    }
    let fnSymbol = Symbol('fn')
    context[fnSymbol] = this // {role:'FE Developer', fn:greet} attach functionto objects 
    let res = context[fnSymbol](...args)
    delete context[fnSymbol]
    return res

}

function greet(name,punctuation){
console.log(`Hey ${name} GM ${punctuation}. You are a ${this.role}`)
}

let person = {role :'FE Developer'}
let person1 = {role :'Full stack Developer'}

greet.mycall(person,'Fareha','!!') // use the greet function , 
// explicity this points to 2 objects . this --> person1
greet.mycall(person1,'Sameet','!!!') // this points to --> person 2