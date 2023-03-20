/*

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 
function sumClosest(arr){

    let min = Infinity
    let ans = -1

    for(let i = 0 ; i<arr.length ; i++){

        
        let i = j + 1
        let k = arr.length - 1

        while(i<j){

            let sum = arr[i] + arr[j] + arr[k]

            if(sum == target){
                return 0
            }
            if(sum < target){

                let diff = Math.abs(sum - target)

                if(diff < min){

                    ans =  sum
                    min = diff
                }
            }
        }
    }


}

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

Constraints:

3 <= nums.length <= 500
-1000 <= nums[i] <= 1000
-104 <= target <= 104

*/

/*


first sort the array

step-1---> take i pointer on 0-Index apply loop on it

step-2 ---> take j pointer on i+1-index and k-pointer arr.length-1 Index

step -3 ---> sum = [i] + [j] + [k] 

step-4 -----> sum == target ---> return sum

step -----5   sum<target , calculate current_Diff = Math.abs(sum - target)
               
if(current_Diff < previDiff) update previDiff = current_Diff
update ansSum = sum

step -----6   sum>target , calculate current_Diff = Math.abs(sum - target)

if(current_Diff < previDiff) update previDiff = current_Diff
update ansSum = sum


at last return ansSum







*/


var threeSumClosest = function(nums, target) {

    nums.sort((a,b) => a-b) // [-4,-1, 1, 2]

    let preDiff = Infinity
    let ansSum = 0

    for(let i = 0 ; i<nums.length ; i++)
    {
        let j = i+1
        let k = nums.length-1;

        while(j<k)
        {
            let sum = (nums[i]+nums[j]+nums[k])

            if( sum == target)
            {
                return sum
            }
            else if(sum > target) 
            {

                let diff = Math.abs( sum - target)

                if(diff<preDiff) 
                {
                   preDiff = diff
                   ansSum = sum
                }

                while(j<k && nums[k] == nums[k-1]){
                    k--
                }
                
                k--
            }
            else
            {
                let diff = Math.abs( sum - target)

                if(diff<preDiff) 
                {
                   preDiff = diff
                   ansSum = sum
                }

                while(j<k && nums[j] == nums[j+1]){
                    j++
                }
                j++
            }
        }
    }
    return ansSum
};






function sum(arr)
{
    let  i = 0 ;

    while(i<arr.length-2)
    {
        let j = i+1
        let k = arr.length -1

        while(i<j)
        {
            
            let sum = arr[i] + arr[j] + arr[k]

            if(sum == k)
            {
              ans.push([arr[i] , arr[j] , arr[k]])

              return

              while(j<k && arr[j] == arr[j+1])
              {
                  j++
              }
              while(j<k && arr[k] == arr[k-1])
              {
                  k--
              }
              j++
              k--
            }
            else if(sum < k)
            {
                curDiff = sum - k
                if(curDiff<clos) 
                {
                    clos = curDiff;
                }
              while(j<k && arr[j] == arr[j+1])
              {
                  j++
              }
            j++
            }
            else 
            {
                curDiff = sum - k
                if(curDiff<clos) 
                {
                    clos = curDiff;
                }
              while(j<k && arr[k] == arr[k-1])
              {
                  k--
              }
              k--
            }
        }
        while(i<arr.length-2 && arr[i] == arr[i+1])
        {
            i++
        }

        i++
    }
}