const input = { a: 2, b: 3, c: 4 };

// Expected Output:
// { a: 4, b: 9, c: 16 } // squares

Object.fromEntries(Object.entries(input).map(([key,val]) => [key, val*val]))
//  https://chatgpt.com/share/6846dc6e-5528-8009-b184-9f7e47efed68