/*

Given an array containing 0s and 1s. Find the number of subarrays having equal number of 0s and 1s.

Example 1:

Input:
n = 7
A[] = {1,0,0,1,0,1,1}
Output: 8
Explanation: The index range for the 8 
sub-arrays are: (0, 1), (2, 3), (0, 3), (3, 4), 
(4, 5) ,(2, 5), (0, 5), (1, 6)
Example 2:

Input:
n = 5
A[] = {1,1,1,1,0}
Output: 1
Explanation: The index range for the 
subarray is (3,4).

*/

// Trick --> Flip all the 0 to -1 , thats means --> if arr[i] == 0 ; add sum+=-1 , else if arr[i] == 1 ; add sum+=+1

 function countSubarrWithEqualZeroAndOne(arr, n){
    // code here
    
    let map = new Map();
    
    let sum  = 0;
    
    let ans = 0
    
    map.set(sum , 1) // if we count number of subArray --> stored --> sum , frequency
    
    for(let  i =0 ;i<arr.length ; i++) {
        
        if(arr[i] == 0) {
            
            sum+=-1
            
        }else if(arr[i] == 1) {
            
            sum+= +1
        }
        
        if(map.has(sum)) {
            
          ans+=map.get(sum) ;
          
          map.set(sum , map.get(sum) + 1)
          
        }else{
            
            map.set(sum , 1)
        }
    }
    
    return ans
}


    function dupChar(s) {
        let map = new Map(), map1 = new Map()
    
        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
               map.set( s[i] ,map.get(s[i]) + 1)

               if(map.get(s[i]) > 1)
               {
                map1.set(s[i] , map.get(s[i]))
               }
            }else{
               map.set(s[i], 1)
        }
    }
    return [...map1.entries()]
    }


    console.log(dupChar("aabcddefdfffffdgghdjj"))