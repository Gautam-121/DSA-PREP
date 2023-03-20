/*

Given two arrays A and B each of size N, the task is to check 
if the sequencing of both the arrays is the same or not.
If the sequencing of both the arrays is same, the print Yes otherwise print No.

Examples:

Input: A[] = { 10, 12, 9, 11 }, B[] = { 2, 7, -3, 5 };
Output: Yes
Explanation: In both the arrays 2nd element is greater than the first one.
The 3rd element is smaller than the 2nd and the last element is greater than the 3rd one.

Input: A[] = { 1, 2, 3, 4 }, B[] = { 1, 3, 2, 4 };
Output: No


*/

/*


approch -->

simply check array 1 (i , i+1) position value greater euqal or less with array 2 (j ,j+1) greater 
equal or less at same iteration because both are same size

if(both greaater then i++ , j++)
if(both less then i++ , j++)

if(one greter another less , or viceversa , return false)

if not return false after all iteration return true




*/

function sequencing(arr1 , arr2)  {

    let  i = 0 // arr1;
    let  j = 0 // arr2;

    while(i<arr1.length-1 && j<arr2.length-1) {

        if((arr1[i] >= arr1[i+1] &&  arr2[j] >= arr2[j+1]) || (arr1[i] < arr1[i+1] &&  arr2[j] < arr2[j+1]) ) {

            i++
            j++
        }
        else{
            
            return false
        }
    }
    return true
}


console.log(sequencing([ 1, 2, 3, 4] , [ 1, 3, 2, 4]))