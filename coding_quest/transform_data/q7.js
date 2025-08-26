const data = [
  { id: 1, type: 'a' },
  { id: 2, type: 'b' }
];

const dict = { a: 'Admin', b: 'User' };

Expected:
// [{ id: 1, role: 'Admin' }, ...]


const transformed = data.map(obj => ({
id:obj.id,
role:dict[obj.type]
}))