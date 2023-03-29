/*
You are given heights of consecutive buildings. You can move from the roof of a building 
to the roof of next adjacent building. 
You need to find the maximum number of consecutive steps you can put forward 
such that you gain an increase in altitude with each step.

Example 1:

function roofTop(arr){

    let i = 0;
    let j = 1;

    while(i<arr.length-1){

        if(arr[j] > arr[i]){
            count++
        }
        else
        {
            maxCount = Math.max(count , maxCount)
            count = 0
        }
    }
}

Input:
N = 5
A[] = {1,2,2,3,2}
Output: 1
Explanation: 1, 2 or 2, 3 are the only consecutive 
buildings with increasing heights thus maximum number
of consecutive steps with increase in gain in altitude
would be 1 in both cases.
Example 2:

Input:
N = 4
A[] = {1,2,3,4}
Output: 3
Explanation: 1 to 2 to 3 to 4 is the jump of
length 3 to have maximum number of 
buildings with increasing heights, so maximum steps
with increasing altitude becomes 3.
Your Task:
The task is to complete the function maxStep() which takes an array A[] (denoting the heights of buildings) and its size N as inputs and returns the maximum number of steps to gain increase in altitude.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1). 

function roofTop(arr)
{
    for(let i = 1 ; i<arr.length ; i++)
    {
        if(arr[i-1] < arr[i]) count++
        else{
            max= Math.max(count , max)
            count = 0
        }
    }
}


approch;

check i+1 is greater than i if yes that means is greater altitude increase count value and then futher check

else i+1 is equal to or less than i thant means is less altitude then again start from that point and and count

altitude if , count is greater than max value then update value of max.

*/




function maxStep(arr) {

    let max = 0;
    let count = 0;

    for(let  i =0 ; i<arr.length-1 ; i++) {

        if(arr[i+1] > arr[i]) {
            count++

            if(count > max) max = count
        }
        else{

            count = 0
        }
    }
    return max
}


function roofTop(arr){

    let i = 0;
    let j = 1;

    let max = -Infinity
    let count = 0;

    while(j<arr.length){

        if(arr[j] > arr[i]){
            count++
        }
        else
        {
            max = Math.max(max , count)
            count = 0
        }

        i++
        j++
    }

    max = Math.max( max , count)

    return max
}