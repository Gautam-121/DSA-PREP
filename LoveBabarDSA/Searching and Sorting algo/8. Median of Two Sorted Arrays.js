// median of two sorted arrays


/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106

*/


// tc --> O(n+m)
// sc ---> O(n+m)


function medianArrays(arr1 , arr2) {

    let i = 0;
    let j = 0 ;
    let k = 0;

    let mergeArray = []

    while(i<arr1.length && j<arr2.length) {

        if(arr1[i]<arr2[j]) {
            
            mergeArray[k++] = arr1[i++]
        }
        else if(arr1[i]>arr2[j]) {
            
            mergeArray[k++] = arr1[j++]
        }
        else {
            mergeArray[k++] = arr1[i++]
            mergeArray[k++] = arr1[j++]
        }
    }

    while(i<arr1.length) {
        mergeArray[k++] = arr1[i++]
    }

    while(j<arr2.length) {
        mergeArray[k++] = arr2[j++]
    }

    let length = mergeArray.length;

    if(length%2 == 0) {
       
        let mPoint = (length/2)

        let median = (mergeArray[mPoint] + mergeArray[mPoint + 1])/2

        return median

    }else{

        let mPoint = Math.ceil(length/2)

        return mergeArray[mPoint]
    }
}


// Tc --> O(nlogn + mlogm)
// sc --> O(1)

/*

step1 --> we stored all the smaller element in arr1 and all the bigger element in arr2
step2 --> then find middle of sorted array 
step3 --> check this middle index at arr1 then print value of arr1 otherwise print value of arr2

*/

function medi(arr1 , arr2)
{
    let totalL = arr1.length + arr2.length

    let i = arr1.length - 1
    let j = 0;

    while(i>=0 && j<arr2.length)
    {
        if(arr[i] > arr[j])
        {
            [arr[i--] , arr[j++]] = [arr[j] , arr[i]]
        }
        else break;
    }

    arr1.sort((a,b) => a-b)
    arr2.sort((a,b) => a-b)

    let middle = Math.floor((totalL)/2)

    if(totalL&1) // For odd case
    {
          if(arr1.length > middle) return arr1[middle]
          else return arr2[middle - arr1.length]
    }
    else
    {
          
    }
}