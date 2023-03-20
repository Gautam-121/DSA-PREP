/*
Given an unsorted array Arr of N positive and negative numbers. 
Your task is to modified an array of alternate positive and negative numbers
without changing the relative order of positive and negative numbers.
Note: Array should start with a positive number.
 

Example 1:

Input: 
N = 9
Arr[] = {9, 4, -2, -1, 5, 0, -5, -3, 2 , -7}
Output:
9 -2 4 -1 5 -5 0 -3 2
Explanation : Positive elements : 9,4,5,0,2
Negative elements : -2,-1,-5,-3 , -7
As we need to maintain the relative order of
postive elements and negative elements we will pick
each element from the positive and negative and will
store them. If any of the positive and negative numbers
are completed. we will continue with the remaining signed
elements.The output is 9,-2,4,-1,5,-5,0,-3,2.

Example 2:

Input:
N = 10
Arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
Output:
5 -5 2 -2 4 -8 7 1 8 0
Explanation : Positive elements : 5,2,4,7,1,8,0
Negative elements : -5,-2,-8
As we need to maintain the relative order of
postive elements and negative elements we will pick
each element from the positive and negative and will
store them. If any of the positive and negative numbers
are completed. we will continue with the remaining signed
elements.The output is 5,-5,2,-2,4,-8,7,1,8,0.
Your Task:  

You don't need to read input or print anything. Your task is to complete the function rearrange() which takes the array of integers arr[] and n as parameters. You need to modify the array itself.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

*/
//{-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}

// Brute Force
/*
create a new Array and store all Positive in that array  positive => [5,2,4,7,1,8,0]
create a new Array and store all Negative in that array  Negative => [-5 , -2 , -8]

update original arraay => [5,-5,2,-2,4,-8,7,1,8,0]
*/


// Optimal Approch , for positive and negative are not same

/*

step-> separate all positive and negative element in a array , all positive left and 
all negative right

where step1 end --> i point , increase by one for first negative number

step->2 rearrage alterate positive and negative

*/

function arregePos(arr)
{
    let i = 0;
    let j = arr.length-1

    while(i<j) // segreagate all Negative number and positive number
    {
        while(i<j && arr[i] >=0) i++
        while(i<j && arr[j] <0) j--

        if(i<j) [arr[i++],arr[j--]] = [arr[j],arr[i]]
    }

    let k = 1;
    i = ++i // i point , increase by one for first negative number

    while(i<arr.length) // rearrage alterate positive and negative
    {
        [arr[k] , arr[i]] = [arr[i] , arr[k]]
        k+=2
        i++
    }

    console.log(arr)
}

arregePos([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8])


// optimal approch , for if pos and neg number are same

/*

Take to point , i --> for even index  , j --> for odd Index

i--> Move upto all postive element in their right place
j--> Move upto all Negative element in their right place

if i --> Is not their right place , j --> Is not their right place
swap it i++ , j--

*/


function arrange(arr)
{
    let i = 0; // even index store all postive element
    let j = 1 // odd index store all negative element
    
    while(i<arr.length && j<arr.length)
    {
        while(i<arr.length && arr[i] >= 0) i+=2
        while(j<arr.length && arr[j] < 0)  j+=2

        if(i<arr.length && j<arr.length)
        {
            [arr[i] , arr[j]] = [arr[j] , arr[i]]
        }

        i+=2
        j+=2
    }

    console.log(arr)
}

arrange([-5, -2, 5, 2, -4, -7, 1, 8, 0, -8])








