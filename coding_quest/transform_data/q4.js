const list = [
  { id: 1, name: 'X' },
  { id: 1, name: 'X' },
  { id: 2, name: 'Y' }
];

// Expected Output: unique by `id`

// [{
//   id: 1,
//   name: "X"
// }, {
//   id: 2,
//   name: "Y"
// }]
let uniques = []
for(let i = 0;i<list.length;i++){
   if(uniques.includes(list[i].id))
    uniques[id] = list[i]
}

//  Get Unique Items from Array of Objects (by key)