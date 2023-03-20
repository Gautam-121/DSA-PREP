/*

Given a sorted array of size N. Count the number of distinct absolute values present in the array.
 

Example 1:

Input:
N = 6
Arr[] = {-3, -2, 0, 3, 4, 5}
Output: 5
Explanation: There are 5 distinct absolute 
values i.e. 0, 2, 3, 4 and 5.

// Brute Force --> O(n^2)
// Just Optimization --> O(n) , sc -> O(n)
// Fully optimaization --> O(n) , sc --> O(1)

already array is sorted --> fayda uthao iska , use two pointer approch --> i = 0 , j = arr.length - 1

i == j count++ nextDistinctFrom I side and nextDistinctFrom j Side i++ ; j--
i<j because no j position value find because j is greater count++ ,nextDistinctFrom J side j--
i>j because no i position value find because i is greater count++ ,nextDistinctFrom i side i--

function distinctCount(arr)
{
    let i = 0;
    let j = arr.length - 1;

    while(i<j)
    {
        if(arr[i] == arr[j])
        {
            count++

            while(arr[i] == arr[i+1] && i<j) i++
            while(arr[j] == arr[j-1] && i<j) j--

            i++
            j--
        }

        if(arr[i] < arr[j])
        {
            count++

            while(arr[j] == arr[j-1] && i<j) j--

            j--
        }

        if(arr[i] > arr[j])
        {
            count++

            while(arr[i] == arr[i+1] && i<j) i++

            i++
        }
    }
}

Example 2:

Input:
N = 9
Arr[] = {-1, -1, -1, -1, 0, 1, 1, 1, 1}
Output: 2
Explanation: There are 2 distinct absolute values 
among the elements of this array, i.e. 0 and 1.

Your Task:
You don't need to read input or print anything. Your task is to complete the function distinctCount() which takes the array of integers arr[] and its size n as input parameters and returns an integer denoting the answer.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

*/

function distinct_Count(arr) {

    let set = new Set()

    for(let i = 0; i<arr.length ; i++) {

        let value = Math.abs(arr[i])

        set.add(value)
    }

    return set.size
}

console.log(distinct_Count([-3, -2, 0, 3, 4, 5]))


function distinct_Count1(arr) {

    let  i = 0 ;
    let  j = arr.length - 1;

    let count = 0

    while(i<=j) {

        if(Math.abs(arr[i]) == Math.abs(arr[j])) {
            
            count++

            while(arr[j-1] == arr[j] && i<j) {
                j--
            }

            while(arr[i] == arr[i+1] && i<j) {
                i++
            }

            i++
            j--


        }
        else if(Math.abs(arr[j]) > Math.abs(arr[i])) {

            count++

            while(arr[j-1] == arr[j] && i<=j) {
                j--
            }
            j--
        }
        else if(Math.abs(arr[j]) < Math.abs(arr[i])) {

            count++

            while(arr[i] == arr[i+1] && i<=j) {
                i++
            }
            i++
        }
    }
    return count
}

console.log(distinct_Count1([-3, -3,-2, -1, 1, 3, 4, 5, 5]))