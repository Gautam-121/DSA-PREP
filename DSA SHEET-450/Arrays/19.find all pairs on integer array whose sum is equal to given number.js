/*

Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.


Example 1:

Input:
N = 4, K = 6
arr[] = {1, 5, 7, 1}
Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6.

Example 2:

Input:
N = 4, K = 2
arr[] = {1, 1, 1, 1}
Output: 6
Explanation: 
Each 1 will produce sum 2 with any 1.

Your Task:
You don't need to read input or print anything. Your task is to complete the function getPairsCount() which takes arr[], n and k as input parameters and returns the number of pairs that have sum K.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)

*/

/*

using hashmap find all pair count thats give sum equal to target

simply find in map -->find -- target-arr[i] ;

if(map[find]) ans+=map(frequ(find))

stored value of that index;

if(map.has(arr[i])) map.set(arr[i] , map.get(arr[i]) + 1) if already present that means increase their frequency by 1

else created in map --> map.set(arr[i] , 1)


*/

 function allPair(arr , k) {

    let map = new Map()
    let ans = 0

    for(let i = 0 ; i<arr.length ; i++) {

        let diff = k - arr[i]

        if(map.has(diff)) {
            ans+=map.get(diff)
        }

        map.set(arr[i] , (map.get(arr[i]) || 0) + 1)
    }
    return ans
 }

 console.log(allPair([1, 1, 1, 1] , 2))


















