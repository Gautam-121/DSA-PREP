/*

Given two sorted arrays array1 and array2 of size m and n respectively. Find the median of the two sorted arrays.

Example 1:

Input:
m = 3, n = 4
array1[] = {1,5,9}
array2[] = {2,3,6,7}
Output: 5
Explanation: The middle element for
{1,2,3,5,6,7,9} is 5
Example 2:

Input:
m = 2, n = 4
array1[] = {4,6}
array2[] = {1,2,3,5}
Output: 3.5
Your Task:
The task is to complete the function MedianOfArrays() that takes array1 and array2 as input and returns their median. 

*/

//Brute force approch --> 
/*

step--1 --> merge both the array 

then if arr3.length is odd  , median is middle of number arr3[mid]
else if arr3.length is odd  , median is  (arr3[mid] + arr3[mid-1])/2
*/

class Solution {
    MedianOfArrays(arr1,arr2){
        //code here
        
    let n = arr1.length  // length of arr1
    let m = arr2.length  // length of arr2
    // step --> 1 --> Merge Both the array
    
    let arr3 = []
    
    let i = 0;
    let j = 0;
    
    while(i<n && j<m)
    {
        if(arr1[i] < arr2[j]) 
        {
            arr3.push(arr1[i]) 
            i++
        }
        else
        {
            arr3.push(arr2[j])
            j++
        }
    }
    
    while(i<n)
    {
        arr3.push(arr1[i])
        i++
    }
    
    while(j<m)
    {
        arr3.push(arr2[j])
        j++
    }
    
    let k = arr3.length
    let mid = Math.floor(k/2)
    
    if(k&1) return arr3[mid]
    else return (arr3[mid] + arr3[mid-1])/2
    
  }
}


// Tc --> O(logn)

var findMedianSortedArrays = function(nums1, nums2) {
    
    // When length are different then apply binary search on shortest array to avoid index out of bound
        if(nums1.length >  nums2.length)
        {
           return findMedianSortedArrays(nums2 , nums1)
        }
    
        let n1 = nums1.length // length of array
        let n2 = nums2.length // length of array
    
        let lo = 0;
        let hi = n1
    
        while(lo <= hi)
        {
            // Initialize the cuts or partitions
            let cut1 =  Math.floor(lo + (hi - lo)/2)
    
            // Total required - already present
            let cut2 = Math.floor((n1+n2)/2) - cut1
    
            // Initialize l1,l2,r1,r2
    
            let l1 = (cut1 == 0) ? Number.MIN_VALUE : nums1[cut1-1]
            let l2 = (cut2 == 0) ? Number.MIN_VALUE : nums2[cut2-1]
            let r1 = (cut1 == n1) ? Number.MAX_VALUE : nums1[cut1]
            let r2 = (cut2 == n2) ? Number.MAX_VALUE : nums2[cut2]
            
            //  Shift element to the left
            if(l1 > r2) hi = cut1 - 1
            else if (l2 > r1) lo = cut1 + 1
            else
            {
                // Check for even length
                if((n1+n2)%2 == 0)
                {
                    return (Math.max(l1,l2) + Math.min(r1,r2))/2
                }
                else
                {
                    return Math.min(r1,r2)
                }
            }
        }
    
        return 0
    };