/*

Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.
 
Example 1:

Input: 
N = 4 
arr[] = {1, 5, 3, 2}
Output: 2 
Explanation: There are 2 triplets:
 1 + 2 = 3 and 3 +2 = 5

Example 2:


Input: 
N = 3
arr[] = {2, 3, 4}
Output: 0
Explanation: No such triplet exits
Your Task:  
You don't need to read input or print anything. Your task is to complete the function countTriplet() which takes the array arr[] and N as inputs and returns the triplet count

Expected Time Complexity: O(N2)
Expected Auxiliary Space: O(1)

*/

// Brute Force , Tc --> O(N^2) , Sc --> O(1)

function countTriplet(arr, n) {
    //code here

    let count = 0

    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {

            let sum = arr[i] + arr[j]

            for (let k = 0; k < n; k++) {

                if (sum == arr[k]) count++
            }
        }
    }

    return count
}

// optimization of approch , Tc --> O(N^2) , Sc --> O(1)

function countTriplet(arr, n) {
    //code here

    arr.sort((a, b) => a - b)

    let count = 0

    for (let i = arr.length - 1; i >= 2; i--) {

        let j = 0;
        let k = i - 1;

        while (j < k) {

            let sum = arr[j] + arr[k]

            if (sum == arr[i]) {
                count++
                j++
                k--
            }
            else if (sum > arr[i]) {
                k--
            }
            else {
                j++
            }
        }
    }
    return count
}






