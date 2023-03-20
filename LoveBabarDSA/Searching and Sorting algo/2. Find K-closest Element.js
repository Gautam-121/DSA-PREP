// if any question kind k closest , kth largest , kth smallest , that means if k present
// Think sliding window or heap ;

/*

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 

Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
Example 2:

Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]

*/

// tc --> logn + klogk

var findClosestElements = function(arr, k, x) {
    
    let start = 0;
    let end   = arr.length - 1;
    
    let mid = 0
        
    while(start<=end) {
        
        mid = Math.floor( start + (end - start)/2)
        
        if(arr[mid] == x) {
            
            break;
        }
        else if(arr[mid] > x) {
          
            end = mid - 1
            
        }
        else if(arr[mid] < x) {
            
            start = mid + 1
        }
    }
    
    let closest = []
    
    let lo = mid-1
    let hi = mid
    
    console.log(lo , hi)
    
    while(lo>=0 && hi<arr.length && k > 0) {
        
        if(Math.abs(arr[lo]-x) <= Math.abs(arr[hi]-x)) {
            
            closest.push(arr[lo])
            lo--
            k--
        }
        else if (Math.abs(arr[lo]-x) > Math.abs(arr[hi] - x)) {
            
            closest.push(arr[hi])
            hi++
            k--
        }
    }
    
    while(lo>=0 && k > 0) {
        
        closest.push(arr[lo])
        lo--
        k--
    }
    
     while(hi<arr.length && k > 0) {
        
        closest.push(arr[hi])
        hi++
        k--
    }
    
    closest.sort((a,b) => a-b)
    
    return closest
};

