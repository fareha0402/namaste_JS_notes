Function.prototype.myBind = function(context ={},...args){
    if(typeof this !== 'function'){
        throw new TypeError(this,'not a function')
    }
    fn = this
    function boundFn(...newArgs){
        if(this instanceof boundFn){
            return fn.apply(this,[...args,...newArgs])
        }
        return fn.apply(context,[...args,...newArgs])
    }
    boundFn.prototype = Object.create(fn.prototype)
    return boundFn
}

function greet (name,punctuation){
    console.log(`${name} ${punctuation} You are great ${this.role}`)
}
let person = {role:'FE Developer'}

const bind = greet.myBind(person,'FS')
bind('##')