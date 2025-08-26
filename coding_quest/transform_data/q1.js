const trades = [
  { id: 1, symbol: "AAPL", quantity: 10, price: 150 },
  { id: 2, symbol: "GOOG", quantity: 5, price: 1000 },
  { id: 3, symbol: "AAPL", quantity: 20, price: 155 },
];
/* o/p: AAPL: { totalQuantity: 30, averagePrice: 153.33 },
GOOG: { totalQuantity: 5, averagePrice: 1000 } */


function getValue(trades){
let result = {}
trades.forEach((e) => {
if(!result[e.symbol]){
result[e.symbol] = {totalQuantity: 0,totalPrice:0}
}
result[e.symbol].totalQuantity += e.quantity
result[e.symbol].totalPrice += e.price * e.quantity
})
console.log(result)

for(let symbol in result){
const {totalQuantity,totalPrice} = result[symbol]
result[symbol].averagePrice = parseFloat((totalPrice/totalQuantity).toFixed(2))
delete result[symbol].totalPrice;
}
return result
}
console.log(getValue(trades))