const orders = [
  { customer: 'A', total: 100 },
  { customer: 'B', total: 50 },
  { customer: 'A', total: 150 },
];

/* Output:
{
  A: [{...}, {...}],
  B: [{...}]
}*/


orders.reduce((acc,order) =>{
    acc[order.customer] = acc[order.customer] || []
    acc[order.customer].push(order)
    return acc
},
{})