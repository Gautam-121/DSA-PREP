/*

Given a sorted array arr[] of size N. Find the element that appears only once in the array. All other elements appear exactly twice. 

Example 1:

Input:
N = 11
arr[] = {1, 1, 2, 2, 3, 3, 4, 50, 50, 65, 65}
Output: 4
Explanation: 4 is the only element that 
appears exactly once.
 

Your Task:  
You don't need to read input or print anything. Complete the function findOnce() which takes sorted array and its size as its input parameter and returns the element that appears only once. 


Expected Time Complexity: O(log N)
Expected Auxiliary Space: O(1)

*/

// Brute Force ---> using XOR Method --> using (i , i+1 ) approch Tc --> O(n) , sc -> o(1)

function findOnce(arr,n){
    //code here
    
    let ans = 0;
    
    for(let i =0 ; i<n ; i++) {
        
        ans^=arr[i]
    }
    return ans
}


// using binary serch tc--> o(logN) sc -->o(1)

function findOnce(arr,n){
    //code here

    if(n==1) {
        return arr[0]
    }
    if(arr[0]!=arr[1]) {
        return arr[0]
    }
    if(arr[n-1]!=arr[n-2]) {
        return arr[n-1]
    }

    let start = 0;
    let end   = n-1;

    let mid;

    while(start<=end) {


        mid = Math.floor(start + (end - start)/2)

        if(arr[mid] != arr[mid-1] && arr[mid]!= arr[mid+1]) {

            return arr[mid]
        }
        else if(arr[mid] == arr[mid-1]) {

            let lc = mid - start + 1

            if(lc%2==0) {

                start = mid + 1
            }
            else {

                end = mid - 2
            }
        }
        else if(arr[mid] == arr[mid+1]) {

            let rc = end - mid + 1

            if(rc%2==0) {

                end = mid - 1
            }
            else {

                start = mid + 2
            }
        }
    }
    return -1
}
