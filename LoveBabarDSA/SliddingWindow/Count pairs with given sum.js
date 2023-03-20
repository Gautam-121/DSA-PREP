/*
Given an array of N integers, and a number sum, the task is to find the number of pairs of integers in the array whose sum is equal to sum.

Examples:  

Input:  arr[] = {1, 5, 7, -1}, sum = 6
Output:  2
Explanation: Pairs with sum 6 are (1, 5) and (7, -1).

Input:  arr[] = {1, 5, 7, -1, 5}, sum = 6
Output:  3
Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5).         

Input:  arr[] = {1, 1, 1, 1}, sum = 2
Output:  6
Explanation: Pairs with sum 2 are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1).

Input:  arr[] = {10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1}, sum = 11
Output:  9
Explanation: Pairs with sum 11 are (10, 1), (10, 1), (10, 1), (12, -1), (10, 1), (10, 1), (10, 1), (7, 4), (6, 5).

*/

 function count(arr , k)
 {
    let map = new Map
    let count = 0

    for(let  i = 0 ; i<arr.length ; i++)
    {
        let search = k - arr[i]

        if(map.has(search))
        {
            count+=map.get(search)
        }

        map.set( arr[i] , (map.get(arr[i]) || 0) + 1)
    }
    return count
 }

 console.log(count([10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1] , 11))
