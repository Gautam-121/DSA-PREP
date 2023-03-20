/*

Given an array of intervals where intervals[i] = [starti, endi],
merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1: 

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

[[1,2] , [0 ,4] , [3 , 8] ] 

// step --1 sort the interval in ascending order

[[0,4],[1,2],[3,8]]

// step --2  compare previous interval with current interval overlapping or not
if overlapping then merge the interva if not then push this tempInteral into ans array
ans stored new interval value in tempInterval

*/
function merge(intervals) {

    if(intervals.length == 0) return intervals


    // If interval sorted , its ohk otherwise
    // step 1 --> sort the interval according ascending order
    intervals.sort(([a,],[b,]) => a-b)

    let mergeInterval = []
    let tempInterval = intervals[0]; // store initial interval

    for(let i = 1 ; i<intervals.length ; i++) {

        // compare current interval of 0-index value with previous interval with last index value
        // step-2 --> if current <= previous , merge the interval 
        // if not push i ans array ans compare with next tempInterval 

        if(intervals[i][0] <= tempInterval[1]) {
               
            tempInterval[1] = Math.max(tempInterval[1] , intervals[i][1])
        }
        else{

            mergeInterval.push(tempInterval)
            tempInterval =  intervals[i]
        }
    }
    mergeInterval.push(tempInterval)
    return mergeInterval
}