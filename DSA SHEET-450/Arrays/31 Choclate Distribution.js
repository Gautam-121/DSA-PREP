/*

Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet.
 Each packet can have a variable number of chocolates. 
 There are M students, the task is to distribute chocolate packets among M students such that :
1. Each student gets exactly one packet.
2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.

Example 1:

Input:
N = 8, M = 5
A = {3, 4, 1, 9, 56, 7, 9, 12} // [1,3,4,7,9,9,12,56]
Output: 6
Explanation: The minimum difference between 
maximum chocolates and minimum chocolates 
is 9 - 3 = 6 by choosing following M packets :
{3, 4, 9, 7, 9}.
Example 2:

Input:
N = 7, M = 3
A = {7, 3, 2, 4, 9, 12, 56}
Output: 2
Explanation: The minimum difference between
maximum chocolates and minimum chocolates
is 4 - 2 = 2 by choosing following M packets :
{3, 2, 4}.
Your Task:
You don't need to take any input or print anything. Your task is to complete the function findMinDiff() which takes array A[ ], N and M as input parameters and returns the minimum possible difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student.

Expected Time Complexity: O(N*Log(N))
Expected Auxiliary Space: O(1)

*/

/*

approch -->brute --> if you take m choclate ramdomly , then you find max and min of than window it take lot time

for optimised , first Sort the array , take window of size m ans then find max choclate and min choclate , and min of all 
the window , this is your ans
*/

class Solution{
    findMinDiff(arr,n,m){
        //code here
        
        if(n<m) return 0

        arr.sort((a,b) => a-b) // Sort the array
        
        let j = 0
        let ans = Infinity
        
        for(let i = m-1 ; i<arr.length ; i++)
        {
            ans = Math.min( ans , arr[i] - arr[j])
            j++
        }
        
        return ans
    }
}





























