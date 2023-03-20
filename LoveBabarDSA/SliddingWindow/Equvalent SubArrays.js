/*

Given an array arr[] of n integers. Count the total number of sub-array having total distinct elements same as that of total distinct elements of the original array.

 

Example 1:

Input:
N=5
arr[] = {2, 1, 3, 2, 3} 
Output: 5
Explanation:
Total distinct elements in array is 3
Total sub-arrays that satisfy the condition
are:
Subarray from index 0 to 2
Subarray from index 0 to 3
Subarray from index 0 to 4
Subarray from index 1 to 3
Subarray from index 1 to 4

Example 2:

Input:
N=5
arr[] = {2, 4, 4, 2, 4} 
Output: 9

*/

/// loop Run infinite time plz fix it then run

    function countDistinctSubarray(arr) {
        // code here
        
        let set = new Set()
        
        for(let  i=0 ; i<arr.length ; i++) {
            
            set.add(arr[i])
        }
        
        let k = set.size
        let ans = 0

        let map = new Map()
        let  i = 0;
        let  j = 0;
        
        while(j<arr.length) {
            
            if(map.has(arr[j])) {
                
                map.set(arr[j] , map.get(arr[j]) + 1)
            }
            else{
                
                map.set(arr[j] , 1)
            }

            console.log(map)

            if(map.size < k)  {       //2, 1, 3, 2, 3
                j++
            }
            else if(map.size == k) {
                
                ans+=(arr.length - j)
                
                while(map.size == k) {
                    
                    if(map.has(arr[i])) {
                        
                        map.set(arr[i] , map.get(arr[i]) - 1)
                        
                        if(map.has(arr[i]) == 0) {
                            
                            map.delete(arr[i])
                        }
                    }
                    console.log(map)
                    if(map.size == k) {

                        ans+=(arr.length -  j)

                    }
                    i++
                }
                j++
            }
        }
        return ans
    }

   console.log(countDistinctSubarray([2, 1, 3, 2, 3]))