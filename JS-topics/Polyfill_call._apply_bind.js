/* call , apply and bind function 
call is used for function borrowing (using the context)
sharing of methods by objects
change the context of this for methods
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
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not callable");
  }
  const fnSymbol = Symbol("fn"); // avoid overwriting
  context[fnSymbol] = this;

  const result = context[fnSymbol](...args);

  delete context[fnSymbol]; // cleanup
  return result;
};


Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not callable");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("Arguments must be an array");
  }

  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;

  const result = context[fnSymbol](...args);

  delete context[fnSymbol];
  return result;
};


// bind method 
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Cannot bind - not callable");
  }
  const fn = this;

  function boundFn(...newArgs) {
    // If called with `new`, ignore provided context and use the new object
    if (this instanceof boundFn) {
      return fn.apply(this, [...args, ...newArgs]);
    }
    return fn.apply(context, [...args, ...newArgs]);
  }

  // Preserve prototype chain for `new`
  boundFn.prototype = Object.create(fn.prototype);

  return boundFn;
};

const callBind = purchaseCall.myBind(car)
callBind('$',40000)
