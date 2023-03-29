/*

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

function maxAllSubArrays(arr){

    let q = []

    let i = 0;
    let j = 0;
    let ans = []

    while(j<arr.length){

        if(!q.isEmpty()){
            while(!(q.isEmpty()) && q.rear < arr[j])
            q.pop()
        }
        q.push(arr[j])

        if(j-i+1 < k) j++
        else
        {
            ans.push(q.front)

            if(q.front ==  arr[i]){
                q.shift()
            }

            i++
            j++
        }



    }
}

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]

*/


var maxSlidingWindow = function(nums, k) {

    let ans = []

    for(let  i = 0 ; i<=nums.length-k ; i++)
    {
        let max = -Infinity

        for(let j = i ; j<i+k ; j++)
        {
            max = Math.max(max , nums[j])
        }

        ans.push(max)
    }

    return ans
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7] , 3))


function maxSlidingWindow1(nums , k)
{

    let maxValueArray = []
    let ans = []

    let  i = 0;
    let  j = 0;

    while(j<nums.length)
    {

        if(maxValueArray.length > 0 )
        {
            let i = maxValueArray.length - 1

            while(maxValueArray.length > 0 && maxValueArray[i] < nums[j])
            {
                maxValueArray.pop()
                i--
            }

            maxValueArray.push(nums[j])
        }
        else
        {
            maxValueArray.push(nums[j])
        }

        if((j-i+1) < k) 
           j++

        else if ((j-i+1) == k)
        {
            ans.push(maxValueArray[0])

            if(maxValueArray[0] == nums[i])
            {
                maxValueArray.shift()
            }
           
            i++
            j++
        }
    }
    return ans
}

console.log(maxSlidingWindow1([1,3,-1,-3,5,3,6,7] , 3))
