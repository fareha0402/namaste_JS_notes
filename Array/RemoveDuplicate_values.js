/* Input: arr[] = {12, 10, 9, 45, 2, 10, 10, 45}
Output: {12, 10, 9, 45, 2}


Input: arr[] = {1, 2, 3, 4, 5}
Output: {1, 2, 3, 4, 5}


Input: arr[] = {1, 1, 1, 1, 1}
Output: {1} */
function findDistinct(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {

        // Check if this element is included in result
        let j;
        for (j = 0; j < i; j++)
            if (arr[i] === arr[j])
                break;

        // Include this element if not included previously
        if (i === j)
            res.push(arr[i]);
    }

    return res;
}


let arr = [12, 10, 9, 45, 2, 10, 10, 45];
let res = findDistinct(arr);
console.log(res.join(" "));

// Output
// 12 10 9 45 2 