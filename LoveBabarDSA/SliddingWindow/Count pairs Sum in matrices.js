/*

Given two sorted matrices mat1 and mat2 of size N x N of elements. Given a value x. The problem is to count all pairs from both matrices whose sum is equal to x.

Note: The pair has an element from each matrix. Matrices are strictly sorted which means that matrices are sorted in a way such that all elements in a row are sorted in increasing order and for row ‘i’, where 1 <= i <= n-1, the first element of row 'i' is greater than the last element of row 'i-1'.

Example 1:

Input: 
N = 3, x = 21
mat1 = { {1 5 6}
         {8 10 11}
         {15 16 18} }
mat2 = { {2 4 7}
         {9 10 12}
         {13 16 20} }
OUTPUT: 4
Explanation: The pairs are (1, 20),
            (5, 16), (8, 13), (11, 10).
Example 2:

Input:
N = 2, x = 10
mat1 = { {1 2}
         {3 4} }
mat2 = { {4 5}
         {6 7}
Output: 2
Explanation: The pairs are (4, 6), (3, 7)

*/

// Using Hashmap

// Tc --> O(n^2 + n^2) , Sc --> (N^2)

function countPair2(arr1 , arr2 , k)
{
    let map = new Map()

    for(let i = 0 ; i<arr2.length ; i++)
    {
        for(let j = 0 ; j<arr2[i].length ; j++)
        {
            map.set( arr2[i][j] , (map.get( arr2[i][j] ) || 0) + 1)
        }
    }

    let count = 0

    for(let i = 0 ; i<arr1.length ; i++)
    {
        for(let j = 0 ; j<arr1[i].length ; j++)
        {
           let search = k - arr1[i][j]

           if(map.has(search))
           {
            count+=map.get(search)
           }
        }
    }
    return count
}

console.log(countPair2([ [1, 5 ,6],[8 ,10 ,11] , [15, 16 ,18]] , [ [2, 4 ,7],[9,10 ,12] , [13, 16 ,20]] , 21))

// Using Two Pointer Approch solve the question , Tc --> O(N^2) , Sc --> O(1)


function countPair1(arr1 , arr2 , k)
{
    let i = 0
    let j = arr2.length-1

    console.log( i , j)

}

console.log(countPair1([ [1, 5 ,6],[8 ,10 ,11] , [15, 16 ,18]] , [ [2, 4 ,7],[9,10 ,12] , [13, 16 ,20]] , 21))




