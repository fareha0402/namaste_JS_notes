// call , apply and bind arw used for 'function borrowing' and where (this) context is not defined

let car = {
    name:'Ferrari',
    color:'red'
}

let showCar = function(name,color){
    console.log(`This car is ${name} which is ${color} in color and costed $500000`)
}
// Call takes 2 arguments( object to be used as current obj,arguments )
showCar.call(car, car.name,car.color)

showCar.apply(car,['Audi','White'])

//bind--  same as call but returns a function, which can be callled later to execute  

let bindFn =showCar.bind(car, 'AUdi','White')
bindFn()
