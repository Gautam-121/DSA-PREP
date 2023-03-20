/*

Given an array Arr[] of size L and a number N, you need to write a program to find if there exists a pair of elements in the array whose difference is N.

Example 1:

Input:
L = 6, N = 78
arr[] = {5, 20, 3, 2, 5, 80}
Output: 1
Explanation: (2, 80) have difference of 78.
Example 2:

Input:
L = 5, N = 45
arr[] = {90, 70, 20, 80, 50}
Output: -1
Explanation: There is no pair with difference of 45.
Your Task:
You need not take input or print anything. Your task is to complete the function findPair() which takes array arr, size of the array L and N as input parameters and returns True if required pair exists, else return False.

Expected Time Complexity: O(L* Log(L)).
Expected Auxiliary Space: O(1).

*/

// Tc --> NlogN

/*

first sort the array , all value aree ascending order , then calculate difference of adjecent value if difference
smaller than target j++
or difference greater than target  i++



*/

function findPair(arr , target) {

    arr.sort((a,b) => a-b)

    let i = 0 ;
    let j = i+1;

    let count = 0

    while(j<arr.length) {

        if(arr[j] - arr[i] == target) {
            count++
        }
        else if(arr[j] - arr[i] < target) {
            j++
        }
        else {
            i++
        }
    }
    
    return count ? count : -1
}

console.log(findPair([90, 70, 20, 80, 50] , 45 ))

/*

using Hashmap and find all pair with difference target using frequency count

simply find (arr[i] - target) , present in map or not ; if present then add frequency of that element in ans

*/


function findPair1(arr , target) {

    let map = new Map()
    let count  = 0

    for(let  i = 0 ; i<arr.length ; i++) {

        if(map.has(arr[i] - target)) {
           ans+=map.get(arr[i])
        }

        map.set(arr[i] , (map.get(arr[i]) || 0) + 1)
    }

    return count ? count : -1
}

console.log(findPair1([90, 70, 20, 80, 50] , 45 ))