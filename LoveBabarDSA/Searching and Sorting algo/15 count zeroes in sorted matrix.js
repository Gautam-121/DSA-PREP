/*

Given a N X N binary Square Matrix where each row and column of the matrix is sorted in ascending order. Find the total number of zeros present in the matrix.

Example 1:

Input:
N = 3
A = {{0, 0, 0},
     {0, 0, 1},
     {0, 1, 1}}
Output: 6
Explanation: 
The first, second and third row contains 3, 2 and 1
zeroes respectively.
Example 2:



Input:
N = 2
A = {{1, 1},
     {1, 1}}
Output: 0
Explanation:
There are no zeroes in any of the rows.
Your Task:
You don't need to read input or print anything. Your task is to complete the function countZeros() which takes a 2D matrix as input and returns the number occurring only once.

Expected Time Complexity: O(N ).
Expected Auxiliary Space: O(1).

*/

/*

as we know --> matrix is row wise sorted and column wise sorted 

pointing last column of first row , check a[i][j] ===1 ; j-- (discart this column)
 a[i][j] == 0 ; count+=(j+1) ; i++ (and all zeros of that row and go to next row)
 */

 // Tc --> O(nlogn)

 function lastOcc(arr , row , col)
 {
     let start  = 0;
     let end    = col - 1
 
     let mid;
     let ans = -1
 
     while(start < end)
     {
         mid = start + (end - start)/2
 
         if(arr[row][mid] == 0)
         {
             ans = mid;
             start = mid + 1
         }
         else 
         {
             end = mid - 1
         }
     }
     return ans
 }
 
 function zeroesMat(arr)
 {
     let count = 0;
 
     let col = arr[0].length
     
     for(let row = 0 ; row<arr.length ; row)
     {
         let lastOcc = lastOcc(arr , row  , col)
 
         count+=lastOcc  + 1
     }
 
     return count
 }

                                          
/// Row wise column wise sorted , then apply search 2D matrix 

function maxZer(arr)
{
    let row = 0 ;
    let col = arr[0].length - 1
    
    while(row<arr.length && col>=0)
    {
        if(arr[row][col] == 0)
        {
            count=col+1
            row++
        }
        else if(arr[row][col] == 1)
        {
            col--
        }
    }
}