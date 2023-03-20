/*

Given two unsorted arrays A of size N and B of size M of distinct elements, 
the task is to find all pairs from both arrays whose sum is equal to X.

Note: All pairs should be printed in increasing order of u. For eg. for two pairs (u1,v1) and (u2,v2), if u12 then
(u1,v1) should be printed first else second.

Example 1:

Input:
A[] = {1, 2, 4, 5, 7}  // [1, 2, 3, 4, 5, 7]
B[] = {5, 6, 3, 4, 8}  // 
X = 9 
Output: 
1 8
4 5
5 4
Explanation:
(1, 8), (4, 5), (5, 4) are the
pairs which sum to 9.
Example 2:
Input:
A[] = {-1, -2, 5, -6, 4, 7}
B[] = {6, 3, 4, 0} 
X = 8 
Output:  // 5 3 , 4 4
4 4 
5 3

Your Task:  
You don't need to read input or print anything. Your task is to complete the function allPairs() which takes the array A[], B[], its size N and M respectively, and an integer X as inputs and returns the sorted vector pair values of all the pairs u,v where u belongs to array A and v belongs to array B. If no such pair exists return empty vector pair.


Expected Time Complexity: O(NLog(N))
Expected Auxiliary Space: O(N)

*/


function allPairs(A, B, X){
    //code here
    
    A.sort((a,b) => a-b)
    
    let set = new Set()
    let ans = []
    
    for(let i = 0 ; i<B.length ; i++) {
        set.add(B[i])
    }
    
    for(let  i = 0 ; i<A.length ; i++) {
        
        let current_Sum = X - A[i]
        
        if(set.has(current_Sum)) {
            
            let temp = []
            
            temp.push(A[i] , current_Sum)
            ans.push(temp)
            
        }
    }
    return ans
}

console.log(allPairs([-1, -2, 4, -6, 5, 7] , [6, 3, 4, 0] , 8))


function allPair(arr1 , arr2){

    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)

    let i = 0;
    let j = arr2.length - 1

    while(i<arr1.length && j>=0){

        if(arr1[i] + arr2[j] == k){
            ans.push([arr1[i] , arr2[j]])
            i++
            j--
        }
        else if(arr1[i] + arr2[j] < k){
            i++
        }
        else
        {
            j--
        }
    }
}




















