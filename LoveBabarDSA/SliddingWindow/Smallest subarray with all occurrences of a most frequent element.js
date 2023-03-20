
/*

//---> // Smallest subarray with all occurrences of a most frequent element =----->

Given an array A. Let X be an element in the array which has the maximum frequency. The task is to find the smallest sub segment of the array which also has X as the maximum frequency element.

Note: if two or more elements have the same frequency (i.e., maximum frequency) and the same sub segment size then print the sub segment which occurs first in the array.

Example 1:
 
Input : A[] = {1, 2, 2, 3, 1}
Output : 2 2
Explanation:
Note that there are two elements that appear two times,
1 and 2.The smallest window for 1 is whole array and
smallest window for 2 is {2, 2}.
Since window for 2 is smaller, this is our output.
Example 2:

Input : A[] = {1, 4, 3, 3, 5, 5} 
Output : 3 3 

//----------> //Smallest subarray having an element with frequency greater than that of other elements ---->

Given an array arr of positive integers, the task is to find the smallest length subarray of length more than 1 having an element occurring more times than any other element.

Examples:

Input: arr[] = {2, 3, 2, 4, 5} 
Output: 2 3 2 
Explanation: The subarray {2, 3, 2} has an element 2 which occurs more number of times any other element in the subarray.

Input: arr[] = {2, 3, 4, 5, 2, 6, 7, 6} 
Output: 6 7 6 
Explanation: The subarrays {2, 3, 4, 5, 2} and {6, 7, 6} contain an element that occurs more number of times than any other element in them. But the subarray {6, 7, 6} is of minimum length.

*/

function smallestSubSegment(arr) {

    let fmap = new Map()
    let smap = new Map()

    let hFrequ = 0;
    let si = 0;
    let ei = 0;
    let length = (ei-si+1)

    for(let i = 0 ; i<arr.length ; i++) {

        if(fmap.has(arr[i])) {

            fmap.set(arr[i] , fmap.get(arr[i]) + 1)  // 1, 2, 2, 3, 1

        }else{

            fmap.set(arr[i] , 1)
            smap.set(arr[i] , i)
        }

        if(fmap.get(arr[i]) > hFrequ) {

            hFrequ = fmap.get(arr[i])
            si = smap.get(arr[i])
            ei = i
            length = (ei - si + 1)
        }
        else if (fmap.get(arr[i]) == hFrequ) {

            let chlength = (i - smap.get(arr[i])) + 1

            if(chlength < length) {

                length = chlength
                si = smap.get(arr[i])
                ei = i
            }
        }
    }

    let ans = []

    for(let  i = si ;  i<=ei ; i++) {
           ans.push(arr[i])
    }

    return ans
}


console.log(smallestSubSegment([2, 3, 4, 5, 2, 6, 7, 6]))
