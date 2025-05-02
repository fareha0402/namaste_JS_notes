/* Given an array of elements occurring in multiples of k, except one element which doesn't occur in multiple of k. Return the unique element.
Examples:
Input: k = 3, arr[] = [6, 2, 5, 2, 2, 6, 6]
Output: 5
Explanation: Every element appears 3 times except 5. */
class Solution {
    findUnique(k, arr) {
        debugger
        // Code here
        let count = {}
        let unique
        for(let val of arr){
            count[val] = (count[val] || 0) +1
        }
        // iterate over objects
        for(let key in count){
            if(count[key] !== k){
                unique = key
            }
        }
        // or
        Object.entries(count).map((e) => {
            let key = e[0]
            let val = e[1]
            console.log(key,val)
        })
        return unique
    }
}

const sol = new Solution()
console.log(sol.findUnique(3,[6,2,5,2,2,6,6]))
// op= 5

// Map vs Object-- 