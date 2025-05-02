/* Input: arr[] = {2, 3, -8, 7, -1, 2, 3}
Output: 11
Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.


Input: arr[] = {-2, -4}
Output: –2
Explanation: The subarray {-2} has the largest sum -2.


Input: arr[] = {5, 4, 1, 7, 8}
Output: 25
Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum 25. 


-- [2,3,-8,7,-1,2,3]
we start with 2+3+(-8) = -3 (since the sum is negative so it's not a subarray that has maximum sum)
move to next set - 7+(-1)+2+3 = 11 (positive)
 so output --> {7,-1,2,3}

*/

function maxSubarraySum(arr){
    let res = arr[0]
    let maxEnding = arr[0]
    for(let i =0; i<arr.length;i++){
        maxEnding = Math.max(maxEnding+arr[i],arr[i])
        res = Math.max(maxEnding,res)
    }
    return res
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));