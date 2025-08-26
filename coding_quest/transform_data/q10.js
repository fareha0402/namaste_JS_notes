const list = [
  { id: 1, name: 'X' },
  { id: 1, name: 'X' },
  { id: 2, name: 'Y' }
];

// Expected Output: unique by `id`
/* [{
  id: 1,
  name: "X"
}, {
  id: 2,
  name: "Y"
}] */

const unique = Array.from(new Map(list.map(item => [item.id, item])).values());