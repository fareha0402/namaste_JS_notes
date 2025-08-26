const info = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
const scores = [{ id: 1, score: 90 }, { id: 2, score: 80 }];

const merged = info.map(obj => ({
...obj,
...scores.find((s) => s.id === obj.id)
}))
console.log(scores.find((s) => s.id === 1)
)
console.log(merged)

// When returning a literal object from an arrow function construct (a lambda), 
// you have to wrap it in parentheses so that it's seen as an expression:

// data.map(item => ({...item, active: false}));

// merge object using spred operator (...) and Object.assign(target,source1)