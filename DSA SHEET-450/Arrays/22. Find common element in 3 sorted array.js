/*

Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
Note: can you take care of the duplicates without using any additional Data Structure?

Example 1:

Input:
n1 = 6; A = {1, 5, 10, 20, 40, 80}  
n2 = 5; B = {6, 7, 20, 80, 100} 
n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
Output: 20 80
Explanation: 20 and 80 are the only
common elements in A, B and C.
 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function commonElements() which take the 3 arrays A[], B[], C[] and their respective sizes n1, n2 and n3 as inputs and returns an array containing the common element present in all the 3 arrays in sorted order. 
If there are no such elements return an empty array. In this case the output will be printed as -1.

 

Expected Time Complexity: O(n1 + n2 + n3)
Expected Auxiliary Space: O(n1 + n2 + n3)

 

Constraints:
1 <= n1, n2, n3 <= 10^5
The array elements can be both positive or negative integers.

*/
 /*

 using two pointer approch find all the common element between arr1 and arr2 
 ans this value in (ans) array

 before check arr3 , check ans.length>0 or not if length==0 then return ans

 then again using two pointer approch find common element between (ans) arry and
 arr3 and push this common element in (finalArr)

 return finalArr

 to remove duplicacy --> used function next_Distinct(arr , i) {

    while(i<arr.length && arr[i] == arr[i+1]) {
        i++
    }
    return i
 }


 */

function commonElements(arr1, arr2, arr3, n1, n2,n3){
    //code here

    function next_Distinct(arr , i) {
        
        while(i<arr.length && arr[i] == arr[i+1]) {
            i++
        }
        return i
    }

    let  i = 0;
    let  j = 0;
    let ans = []
    
    while(i<arr1.length && j<arr2.length) {
        
        if(arr1[i] == arr2[j]) {
            
            ans.push(arr1[i])
            
            i = next_Distinct(arr1 , i)
            j = next_Distinct(arr2 , j)
            
            i++
            j++   
        }
        
        else if(arr1[i] < arr2[j])
            i++
            
        else if(arr1[i] > arr2[j])
            j++        
    }

    if(ans.length == 0) return ans;
    
    let finalAns = []

    i = 0;
    j = 0;

    while(i<ans.length && j<arr3.length) {
    
       if(ans[i] == arr3[j]) {
           
            finalAns.push(arr3[j])
            
            i = next_Distinct(ans , i)
            j = next_Distinct(arr3 , j)
            
            i++
            j++
        }
        
        else if(ans[i] < arr3[j])
            i++
            
        else if(ans[i] > arr3[j])
            j++
            
    }
    
    return finalAns
}


// approch -1 --> Tc --> O(n1 + n2 + n3) , sc--> O(n1 + n2 + n3)

class Solution{
    commonElements(arr1, arr2, arr3, n1, n2,n3){
        //code here
        
        let set1 = new Set()
        let set2 = new Set()
        let set3 = new Set()
        
        for(let i = 0 ; i<n1 ; i++)
        {
            set1.add(arr1[i])
        }
        
        for(let i = 0 ; i<n2 ; i++)
        {
            if(set1.has(arr2[i]))
            {
                set2.add(arr2[i])
                
                set1.delete(arr2[i])
            }
        }
        
         for(let i = 0 ; i<n3 ; i++)
        {
            if(set2.has(arr3[i]))
            {
                set3.add(arr3[i])
                
                set2.delete(arr3[i])
            }
        }
        
        return [...set3]
    }
}

// approch -2 --> Tc --> O(n1 + n2 + n3)  sc --> O(1)

// as i Know array is sorted take benifit of it


class Solution{
    commonElements(arr1, arr2, arr3, n1, n2,n3){
        //code here
        
        let i = 0
        let j = 0;
        let k = 0;
        
        let ansArr = []
        
        while(i<n1 && j<n2 && k<n3)
        {
            if(arr1[i] == arr2[j] && arr2[j] == arr3[k])
            {
                ansArr.push(arr1[i])
                
                while(i<n1-1 && arr1[i] == arr1[i+1])  i++
                while(i<n2-1 && arr2[j] == arr2[j+1])  j++
                while(i<n3-1 && arr3[k] == arr3[j+1])  k++
                
                i++
                j++
                k++
            }
            else if(arr1[i] < arr2[j]) i++
            else if(arr2[j] < arr3[k]) j++
            else k++
        }
        
        return ansArr
    }
}







