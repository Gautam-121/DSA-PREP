/*

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise)
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000

*/

function reverse(arr)
 {
    let i = 0;
    let j = arr.length-1;

    while(i<j)
    {
        [arr[j],arr[i]] = [arr[i],arr[j]]
        i++
        j--
    }
 }
var rotate = function(matrix) {
    
    //step -1 --> Take transpose of it , in palce , check matrix is same row and column

    let n = matrix.length;

    for(let i = 0 ; i <n ; i++)
    {
        for(let j = 0 ; j<i ; j++)
        {
            [matrix[i][j] , matrix[j][i]] =[ matrix[j][i] , matrix[i][j]]
        }
    }
    
    // step--2 reverse Each row 
    for(let i = 0 ; i<n ; i++)
    {
        reverse(matrix[i])
    }
};