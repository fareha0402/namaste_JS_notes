/* call , apply and bind function 
call is used for function borrowing (using the context)
*/

function purchaseCall(currency,price){
    console.log(`This car is ${this.color} ${this.company} which costs ${price}${currency}`)
}

let car ={
    color:'red',
    company:'Ferrari'
}
purchaseCall.call(car,"$",30000)
purchaseCall.apply(car,['$',30000])
const func= purchaseCall.bind(car,'$',30000)
func()

// Polyfill for call
Function.prototype.myCall = function(context ={}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + 'It is not callable')
    }
    context.fn = this;
    context.fn(...args)
}

Function.prototype.myApply = function(context = {}, args = []){
    if(typeof this !== 'function'){
        throw new Error('It is not callable')
    }
    if(!Array.isArray(args)){
        throw new TypeError('Its should take array as arguments')
    }
    context.fn = this
    context.fn(...args)
}

// bind method 
Function.prototype.myBind = function(context = {},...args){
    if(typeof this !== 'function'){
        throw new Error('cannot be bound, It is not callable')
    }
    context.fn = this;
        return function(...myArgs){
            return context.fn(...myArgs,...args)
        }
}

const callBind = purchaseCall.myBind(car)
callBind('$',40000)
