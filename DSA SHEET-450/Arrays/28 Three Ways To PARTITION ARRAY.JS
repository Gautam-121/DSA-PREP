
/*

Given an array of size n and a range [a, b]. 
The task is to partition the array around the range such that array is divided into three parts.

1) All elements smaller than a come first.
2) All elements in range a to b come next.
3) All elements greater than b appear in the end.
The individual elements of three sets can appear in any order. You are required to return the modified array.


Example 1:

Input: 
n = 5
A[] = {1, 2, 3, 3, 4}
[a, b] = [1, 2]
Output: 1
Explanation: One possible arrangement is:
{1, 2, 3, 3, 4}. If you return a valid
arrangement, output will be 1.


Example 2:

Input: 
n = 3 
A[] = {1, 2, 3}
[a, b] = [1, 3]
Output: 1
Explanation: One possible arrangement 
is: {1, 2, 3}. If you return a valid
arrangement, output will be 1.


Your Task:
You dont need to read input or print anything. The task is to complete the function threeWayPartition() which takes the array[], a and b as input parameters and modifies the array in-place according to the given conditions.
Note: The generated output is 1 if you modify the given array successfully.


Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)


*/


// When partition of array in three part , Think about Dutch National flag algoritm

// 0 to start-1-- --> all value less than "a"
// start to i-1 --> all value a>= && b<=
// end+1 to n-1 ---> all value greater than b

function threeWayPartition(arr, a, b)
    {
        //your code here
       let start = 0; // Low
       let i = 0;  // Mid
       let end = arr.length - 1; // High
       
       while(i<=end) // Mid<=end
       {
           if(arr[i] < a ) // if arr[i] < a , swap smaller value on left side 
           {
               [arr[i++] , arr[start++]] = [arr[start] , arr[i]]
           }
           else if (arr[i] > b) // if arr[i] > b , swap bigger value on right side , dont icrease i++ , because it chance to conatain higher value
           {
               [arr[i] , arr[end--]] = [arr[end] , arr[i]]
           }
           else{
               i++  // if arr[i] >=a && arr[i] <=b , simply i++
           }
       }
    }