/*

Given a boolean 2D array of n x m dimensions where each row is sorted. Find the 0-based index of the first row that has the maximum number of 1's.

Example 1:

Input: 
N = 4 , M = 4
Arr[][] = {{0, 1, 1, 1},
           {0, 0, 1, 1},
           {1, 1, 1, 1},
           {0, 0, 0, 0}}
Output: 2
Explanation: Row 2 contains 4 1's (0-based
indexing).

Example 2:

Input: 
N = 2, M = 2
Arr[][] = {{0, 0}, {1, 1}}
Output: 1
Explanation: Row 1 contains 2 1's (0-based
indexing).

Your Task:  
You don't need to read input or print anything. Your task is to complete the function rowWithMax1s() which takes the array of booleans arr[][], n and m as input parameters and returns the 0-based index of the first row that has the most number of 1s. If no such row exists, return -1.
 
*/


// Approch go in each row , find firstOccurance of one using binary search

function firstOcc(arr , i , m )
{
    let ans = -1
    let start = 0
    let end = m-1
    let mid;
    
    while(start<=end)
    {
        mid = Math.floor(start + (end - start)/2)
        
        if(arr[i][mid] == 1)
        {
            ans = mid
            end = mid - 1
        }
        else
        {
            start = mid + 1
        }
    }
    return ans
}


class Solution {
    
    rowWithMax1s(arr, n, m){
        // code here
        let maxi = -Infinity
        let index = -1
        
        for(let i = 0 ; i<n ; i++)
        {
            let first = firstOcc(arr , i , m )
            
            if(first == -1) continue
            
            let maxOnes = m - first
            
            if(maxOnes > maxi)
            {
                maxi = maxOnes
                index = i
            }
            
        }
        
        return index
    }
}