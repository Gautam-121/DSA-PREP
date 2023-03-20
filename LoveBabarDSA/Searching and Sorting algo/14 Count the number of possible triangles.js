/*

Given an unsorted array arr[] of n positive integers. Find the number of triangles that can be formed with three different array elements as lengths of three sides of triangles. 

Example 1:

Input: 
n = 3
arr[] = {3, 5, 4}
Output: 
1
Explanation: 
A triangle is possible 
with all the elements 5, 3 and 4.
Example 2:


Input: 
n = 5
arr[] = {6, 4, 9, 7, 8}
Output: 
10
Explanation: 
There are 10 triangles
possible  with the given elements like
(6,4,9), (6,7,8),...
 

Your Task: 
This is a function problem. You only need to complete the function findNumberOfTriangles() that takes arr[] and n as input parameters and returns the count of total possible triangles.

Expected Time Complexity: O(n2).
Expected Space Complexity: O(1).

*/

// Tc --> O(n^3) , sc --> O(n)


function findNumberOfTriangles(arr, n)
    {
        //your code here
        
        let count = 0;
        
        for(let i =0 ; i<n-1 ; i++) {
            
            let a = arr[i]
            
            for(let j = i+1 ; j<n; j++ ) {
                
                let b = arr[j]
                
                for(let k = 0 ; k<n ; k++) {
                    
                    let c = arr[k]
                    
                    if(a == c || b === c) {
                        continue;
                    }
                    
                    if(a+b>c && b+c>a && c+a>b) {
                        // add set after sort 
                    }
                    
                }
            }
        }
        return count
    }

    console.log(findNumberOfTriangles([3, 5, 4] , 3))



    
function findNumberOfTriangles1(arr, n)
{
    //your code here

    arr.sort((a,b) => a-b)

    let count = 0

    for(let  i = n-1 ; i>=2 ; i--) {

        let  j = 0;
        let  k = i-1

        while(j<k) {
 
            if(arr[j] + arr[k] > arr[i]) {

                count+=(k-j)

                k--
            }
            else{
                
                j++
            }
            
        }
    }
    return count
}

console.log(findNumberOfTriangles1([6, 4, 9, 7, 8] , 5))