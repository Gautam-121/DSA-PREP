/*
Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

var spiralOrder = function(matrix) {
    
    let ansMat = []
    let row = matrix.length
    let col = matrix[0].length


    let startRow = 0 // startRow Index
    let endRow   = row-1 // end Index
    let startCol = 0 // startCol Index
    let endCol = col - 1; // endCol Index

    let count = 0 
    let total = row * col // Total element in matrix

    while(count < total) // where count is greater than total stop here
    {
        // Print StartRow
        for(let index = startCol ;count < total && index<=endCol ; index++)
        {
            ansMat.push(matrix[startRow][index])
            count++
        }
        startRow++

        // Print endCol
        for(let index = startRow ; count < total && index<=endRow ; index++)
        {
            ansMat.push(matrix[index][endCol])
            count++
        }
        endCol--

        // Print endRow
        for(let index = endCol ;count < total &&  index>=startCol ; index--)
        {
            ansMat.push(matrix[endRow][index])
            count++
        }
        endRow--

        // Print startCol
        for(let index = endRow ;count < total && index>=startRow ; index--)
        {
            ansMat.push(matrix[index][startCol])
            count++
        }
        startCol++
    }
    return ansMat
};