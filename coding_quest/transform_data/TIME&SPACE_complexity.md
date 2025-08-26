
🔍 1. Set
js
Copy
Edit
const mySet = new Set([1, 2, 3]);
mySet.has(2);
✅ Time Complexity: O(1) (on average, due to hash table implementation)

✔️ Optimized for fast lookup

❌ Order is not guaranteed (unless you use Set's iteration)

🔍 2. Map
js
Copy
Edit
const myMap = new Map();
myMap.set('a', 100);
myMap.has('a');
✅ Time Complexity: O(1) (average case)

✔️ Stores key-value pairs efficiently

✔️ Maintains insertion order

🔍 3. Array
js
Copy
Edit
const arr = [1, 2, 3, 4];
arr.includes(3); // or arr.indexOf(3)
⛔ Time Complexity: O(n)

Must scan each element until a match is found (or end of array)

Best for ordered sequences, not efficient for searching large datasets

🔍 4. String
js
Copy
Edit
const str = "hello world";
str.includes("o");
⛔ Time Complexity: O(n)

JavaScript strings are like arrays of characters

Searching is linear unless indexed manually (e.g., using a Map)

✅ Summary Table
Data Structure	Find Time Complexity	Notes
Set	O(1) (avg), O(n) (worst)	Fastest for existence check
Map	O(1) (avg), O(n) (worst)	Fastest for key lookup
Array	O(n)	Slow if large size
String	O(n)	Treated as array of chars