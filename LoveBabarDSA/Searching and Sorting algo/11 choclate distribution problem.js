/*

Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are M students, the task is to distribute chocolate packets among M students such that :
1. Each student gets exactly one packet.
2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.

Example 1:

Input:
N = 8, M = 5
A = {3, 4, 1, 9, 56, 7, 9, 12}
Output: 6
Explanation: The minimum difference between 
maximum chocolates and minimum chocolates 
is 9 - 3 = 6 by choosing following M packets :
{3, 4, 9, 7, 9}.
Example 2:

// step --> Sort the array 
// step----> create window size of M sudent , 
// step ---> find max and min of that window ,and their compare with max

function choclate(arr , m)
{
    if(arr.lengh < m) return -1

    arr.sort() // step --> 1
    
    let j = 0
    let max = -Infinity

    for(let i = m-1 ; i<arr.length ; i++)
    {
       let max =  arr[i]
       let min =  arr[j]

       max = Math.max( max , max-min)
    }

    return max
}


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

 function findMinDiff(arr,n,m){
    //code here
    
    arr.sort((a,b) => a-b);
    
    let j = 0;
    let min = Infinity
    
    for(let i =m-1 ; i<n ; i++) {
        
        let value = arr[i] - arr[j]
        
        if(value<min) min = value
        
        j++
    }
    
    return min
} 