const obj = { a: 1, b: 2 };

// Expected:
// [ { key: 'a', value: 1 }, { key: 'b', value: 2 } ]

Object.entries(obj).map(([key,val]) => ({key,val}))