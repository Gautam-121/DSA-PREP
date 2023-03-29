// Brute Force usning sorting alogithm ==> Tc --> O(Nlogn) , Sc --> O(1)
// krna with constant extraa space wala
// Two pointer --> Tc --> O(N) , Sc --> O(1)

let arr1 = [-12, -5, 11, 13, 6, -7, 5, -3, -6]



//sequence is not matter
function allNegative(arr) {

    let  i = 0;
    let  j = arr.length-1;

    while(i<j) {

        while(arr[i]<0 && i<j)  
           i++
        while(arr[j]>=0 && i<j)  
           j--
        
        if(i<j) {
            [arr[i],arr[j]] = [arr[j], arr[i]]
        }
        i++;
        j--
    }
    return arr
}

console.log(allNegative(arr1))


function moveAllNegativeInteger(arr){

    let i = 0;
    let j = 0;

    while(i<arr.length){

        if(arr[i]<0) {
            [arr[i],arr[j++]] = [arr[j],arr[i]]
        }

        i++
    }
}

let arr2 =[4,-9,4,1,5,-9]

moveAllNegativeInteger(arr2)

console.log(arr2)




// sequence is matter , solve without extraa space


// optimal Approch -> Tc --> O(N*N)  , Sc --> O(1)

/*

The idea is to process the array from left to right. While processing, find the first out-of-place element in the remaining unprocessed array. An element is out of place if it is negative and at odd index (0-based index), or if it is positive and at even index (0-based index). Once we find an out-of-place element, we find the first element after it with an opposite sign. We right rotate the subarray between these two elements (including these two).

Illustration:

Let the array be arr[] = { -5, -2, 5, 2, 4, 7, 1, 8, 0, -8 }

First iteration: 

{ -5, -2, 5, 2, 4, 7, 1, 8, 0, -8 } , -2 appears on odd index position and is out of place.
We will look for the first element that appears with an opposite sign
{ -5, -2, 5, 2, 4, 7, 1, 8, 0, -8 } => perform rotation of subarray between this two elements
{ -5, 5, -2, 2, 4, 7, 1, 8, 0, -8 }
Second iteration: 


{ -5, 5, -2, 2, 4, 7, 1, 8, 0, -8 } , 4 is out of place.
{ -5, 5, -2, 2, 4, 7, 1, 8, 0, -8 } =>-8 is of different sign 
{ -5, 5, -2, 2, -8, 4, 7, 1, 8, 0 } => after performing right rotation between 4 to -8
Algorithm:
We will maintain a variable to mark if the element is in its correct position or not. Let the variable be outofplace. Initially, it is -1.

We will iterate over the array
If outofplace is -1, we will check if the current index is out of place.
If the current index is out of place we will update the outofplace with the index value.
Else we will keep the value as it is.
If the outofplace is not -1, we will search for the next index which has a different sign than that of the value that is present in outofplace position.
Now we will pass this two positions to right rotate our array.
Update the value of outofplace by 2 unit.

https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/

*/

function reverse(arr , i , j)
{
    while(i<j)
    {
        [arr[i++] , arr[j--]] =  [arr[j] , arr[i]]
    }
}

function altPosNeg(arr)
{
    let j = 0;
    let i = 0;

    while(i<arr.length)
    {
        if(arr[i] < 0) 
        {
            reverse(arr , j , i)
            reverse(arr , j+1 , i)
            j++
        }
        i++
    }
    return arr
}

console.log(altPosNeg([-12, 11, -13, -5, 6, -7, 5, -3, -6]))

// Most optimal approch is use sliding window

// Approach 5: Using Sliding Window with two pointer technique

// This technique utilises sliding window of positive numbers to shift negative numbers 
// to the start of the window, while moving forward.




// Time Complexity: O(n*window)
// Auxiliary Space: O(1), since no extra space has been taken.

function rearrangePosNegWithOrder(arr, size) {
    let i = 0, j = 0;

    while (j < size) {
        if (arr[j] >= 0) {
            j++;
        }
        else {
            for (let k = j; k > i; k--) {
                
                [arr[k] , arr[k-1]] = [arr[k-1] , arr[k]]
            }
            i++;
            j++;
        }
    }
}
 
let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
let size = arr.length;
rearrangePosNegWithOrder(arr, size);

console.log(arr)



















function moveAllNegativ(arr){

    let i = 0;
    let j = 0;

    while(j<arr.length){

        if(arr[j] > 0) j++

        else{

            for(let k = j ; k > i ; k--){
                [arr[k] , arr[k-1]] =  [arr[k-1] , arr[k]]
            }

            i++
            j++
        }
    }
}

let arr3 = [11 , 12 ,13 , -14 , 15 ,-16 ,-7 ]

moveAllNegativ(arr3)

console.log(arr3)