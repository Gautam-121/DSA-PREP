/*

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

Example 1:

Input: nums = [2,3,1,1,4] , [3,2,1,0,4,5]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2

*/

/*

//  -->  how To solve This Problem

take three variable 

farhest ; jump ; current ;

farthest --> maximum farthest distance of that jumps;
jump --> Number of jumps taken to reach end of array;
current --> represt curent position of that jumps maximum jump;

{
[1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]  , when you at Index zero , when you jump max one jump , then you reach index 1

you jump 1 or 2 or max 3

current  --> 4

start with index Zero ;

calculate farthest --> Math.max(farthest , arr[i] + i)

if(i === current) jumps++ current update ; current = farthest

}

if( current >= nums.length - 1) return jumps // arr.length- 1  because you reach at last index of array only

return  -1 ;  because at any postion zero appear , that why your i increases but current not updated


*/


function jump(arr){

    let furthest = 0;
    let jumps = 0;
    let current = 0;

    for(let  i = 0; i<arr.length-1 ; i++) {

        furthest = Math.max(furthest , arr[i] + i)

        if(i == current) {

            jumps++
            current = furthest
        }
    }
    
    return current>=arr.length-1 ? jumps : -1
}

console.log(jump([2,3,1,1,4]))






















function jumps(arr) {

    let farthest = 0;
    let current = 0;
    let jCount = 0;

    for(let i= 0 ; i<arr.length-1; i++) {

        farthest = Math.max(farthest , arr[i]+i)

        if(i == current) {
            current = farthest;
            jCount++
        }
    }

    if(current >= arr.length-1 ) return jCount;

    return -1
}

console.log(jump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))