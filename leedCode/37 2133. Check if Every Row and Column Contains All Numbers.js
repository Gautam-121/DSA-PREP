/*

An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

 

Example 1:


Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
Output: true
Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
Hence, we return true.
Example 2:


Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
Output: false
Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
Hence, we return false.
 

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 100
1 <= matrix[i][j] <= n

*/

/*

approch - 1 --->  you can used eigther set or frequency array to count the number

step-1 --> store Matrix length = Matrix.length

step-2 --> count all the element ---> store all the unique element of row using "set" 

step-3 ---> if at any row  check matrixLength !== set.size return false , return false means it not contain
all n number in row

step-4 ---> if at any column  check matrixLength !== set.size return false , return false means it not contain
all n number in column

if all is Ohk then return true

approch-2 using frequency array

step1--> create frequency array of size (N+1) because it start from zero Index

step-2 --> first check row --->  update ith index by the frquency of element in row
after then check if at any index frequency array ==0 then return false 

step-3 --> second check column --->  update ith index by the frquency of element in column
after then check if at any index at (frequency array) ==0 then return false 

if all ohk return true
*/


var checkValid = function(matrix) {

    let total = matrix.length

    for(let i = 0 ; i<matrix.length ; i++)
    {
        let set = new Set()

        for(let j = 0 ; j<matrix[i].length ; j++)
        {
            let val = matrix[i][j]
            
            if(val > total || set.has(val)) return false

            set.add(val)
        }

        set.clear()
    }

    for(let i = 0 ; i<matrix.length ; i++)
    {
        let set = new Set()

        for(let j = 0 ; j<matrix[i].length ; j++)
        {
            let val = matrix[j][i]
            
            if(val > total || set.has(val)) return false

            set.add(val)
        }

        set.clear()
    }
    return true
};


var checkValid = function(matrix) {

    let n = matrix.length
    let frqu  = new Array(n+1)

    frqu.fill(0)

    for(let i = 0 ; i<matrix.length ; i++)
    {

        for(let j = 0 ; j<matrix[i].length ; j++)
        {
            frqu[matrix[i][j]]++
        }

        for(let k = 1 ; k<=n ; k++)
        {
            if(frqu[k] == 0)
               return false
            else
            {
               frqu[k] = 0
            }
        }
    }
    
    for(let i = 0 ; i<matrix.length ; i++)
    {

        for(let j = 0 ; j<matrix[i].length ; j++)
        {
            frqu[matrix[j][i]]++
        }

        for(let k = 1 ; k<=n ; k++)
        {
            if(frqu[k] == 0)
               return false
            else
            {
               frqu[k] = 0
            }
        }
    }
    return true
};

