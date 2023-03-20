/*

Given a list of non negative integers, arrange them in such a manner that they form the largest number possible.The result is going to be very large, hence return the result in the form of a string.


Example 1:

Input: 
N = 5
Arr[] = {3, 30, 34, 5, 9}
Output: 9534330
Explanation: Given numbers are {3, 30, 34,
5, 9}, the arrangement 9534330 gives the
largest value.
Example 2:

Input: 
N = 4
Arr[] = {54, 546, 548, 60}
Output: 6054854654
Explanation: Given numbers are {54, 546,
548, 60}, the arrangement 6054854654 
gives the largest value.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function printLargest() which takes the array of strings arr[] as parameter and returns a string denoting the answer.

Expected Time Complexity: O(NlogN)
Expected Auxiliary Space: O(1)

*/

// approch --> first sort the array in lexigrapic order ,after sorting large first place
// value is in right side  , but some operation is needed to perform 

/*

[54, 60, 548, 544] --> afterLexigrapic sorting --> [54 , 544 , 548 , 60 ]

--> if we joind this number and form largest number --> 6054854454 but my largest no.
is 6054854544  , how we can manupulate this number

a ==> 54 , b ==> 544

append this to number --> "54" + "544"  --> 54544 --> n1
append this to number --> "544" + "54"   --> 54454 --> n2

as we seen n1 > n2 --> 54 apper before then 544 --> my arrg is [544 , 54 , 548 , 60]

*/

function myCompare(X, Y)
{
    // // first append Y at the end of X
    let n1 = X + Y;

    // // then append X at the end of Y
    let n2 = Y + X;

    // // Now see which of the two 
    // // formed numbers is greater
    if(n1 > n2)
    {
        return -1
    }
}

class Solution{
    printLargest(arr){
    //code here
    // Sort the numbers using 
    // inbuilt sort function. The
    // function uses our comparison 
    // function myCompare() to
    // compare two strings.
    arr.sort(myCompare)
    
    return arr.join("")
    
    }
}


