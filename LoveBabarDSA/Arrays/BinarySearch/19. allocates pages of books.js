// allocate pages of book

/*

You are given N number of books. Every ith book has Ai number of pages. 
You have to allocate contiguous books to M number of students. 
There can be many ways or permutations to do so. 
In each permutation, one of the M students will be allocated the maximum number of pages. 
Out of all these permutations, the task is to find that particular permutation in which the
maximum number of pages allocated to a student is the minimum of those 
in all the other permutations and print this minimum value.

Each book will be allocated to exactly one student. Each student has to be allocated at least one book.

Note: Return -1 if a valid assignment is not possible, and allotment should be in contiguous order (see the explanation for better understanding).


function isValid(arr , allocate , m){

    let count = 1;
    let sum = 0

    for(let i=0 ; i<arr.length ; i++){

        sum+=arr[i]

        if(sum > allocate){
            count++
            sum = arr[i]
        }

        if(count > m) return false
    }

    return true
}

function allocate(arr){

    let start = Math.max(...arr)
    let end = sumation of all the pages

    let ans = -1

    while(start <= end){

        let mid = Math.floor( start + (end - start)/2)

        if(isValid(arr , mid , m)){

            ans = mid
            end = mid - 1
        }
        else
        {
            start = mid + 1
        }
    }
}
 

Example 1:

Input:
N = 4
A[] = {12,34,67,90}
M = 2
Output:113
Explanation:Allocation can be done in 
following ways:
{12} and {34, 67, 90} Maximum Pages = 191
{12, 34} and {67, 90} Maximum Pages = 157
{12, 34, 67} and {90} Maximum Pages =113.
Therefore, the minimum of these cases is 113,
which is selected as the output.

Example 2:

Input:
N = 3
A[] = {15,17,20}
M = 2
Output:32
Explanation: Allocation is done as
{15,17} and {20}
Your Task:
You don't need to read input or print anything. Your task is to complete the function findPages() which takes 2 Integers N, and m and an array A[] of length N as input and returns the expected answer.


Expected Time Complexity: O(NlogN)
Expected Auxilliary Space: O(1)

*/

//Function to find minimum number of pages.

// Tc --> O(NlogN)  , Sc  ---> O(1)

function findPages(a, n, m)
{
    //your code here
     
    if(n<m) return -1
    
    let start = Math.max(...a)  // start contain max value in array
    
    let end = 0;  
    
    let mid;
    
    for(let  i = 0 ; i<n ; i++) { // end contain sum of array
        
        end+=a[i]
    }
    
    let result  = -1 // if no any matches formed for allocation return -1
    
    function isValid(arr , size , k , mx) {    // check the pages found for allocation is valid permutation or not
        
        let stuCount = 1;   // at least one book allocated at each student
        let sum      = 0;
        
        for(let i = 0 ; i<size ; i++) {
            
            sum+=arr[i];
            
            if(sum > mx) {  // if sum is greater than maximum pages allocation , then student count increases
                 
                stuCount++;
                sum = arr[i]
            }
            
            if(stuCount > k) return false
        } 
        
        return true
    }
    
    while(start<=end) {
        
        mid = Math.floor(start + (end - start)/2)  // mid --> maximum number of pages allocated
         
        if( isValid(a, n , m , mid ) == true) {  // pages found for allocation is valid or not ,if Yes
            
            result = mid;  // one valid answer but allocate minimum number of all permutation of maximum value
            end = mid - 1    // find minimum nuber of pages allocation
        }
        else {  // If No
            
            start = mid + 1  // This is not valid page allocation check another higher value
        }
    }
    
    return result
}

console.log(findPages())


