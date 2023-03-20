// Largest Sum of an array --> largestElement + secondLargest   --> largest sum
// smallest Sum of an array ---> smallestElement + secondSmallest --> smallest sum of an arry

//maximum Difference of an array ---> largestElement + smallestElement ---> maximum diffence
//minimum Difference of an array ---> smallestElement + secondSmallest ----> minimumDifference




/*
You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

 

Example 1:

Input: nums = [18,43,36,13,7]
Output: 54
Explanation: The pairs (i, j) that satisfy the conditions are:
- (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
- (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
So the maximum sum that we can obtain is 54.


optimal Approch

step1--> iterate each index of array ;

at i-Index --> calculate digitSum of that index Value ; using While loop(num!=0) {}

step --> 2 After stop while loop

simple check this digit sum present in our HASHMAP or not 

--> Not present --> set key value pair in map (key --> DigitSum , value --> arr[i] )

--> if present ---> calculate totalSum = arr[i] + (value present in map at that digitSum)

---> compare totalSum > max --> if greater then update max sum

---> stored at map digitSum whose value is max

eg --> 18 , 36 --> digitSum = 9;

map --> 
{
   9 : Max(18 , 36)
}


*/

// brute Force , Tc --> O(n^2)

function maximum(nums) {

    let newArr = []

    for (let i = 0; i < nums.length; i++) {

        let sum = 0
        let value = nums[i]

        while (value != 0) {

            let rem = value % 10;

            sum = sum + rem;

            value = Math.floor(value / 10)

        }
        newArr.push(sum)
    }

    let max = 0;

    for (let j = 0; j < newArr.length; j++) {

        for (let k = j + 1; k < newArr.length; k++) {

            if (newArr[j] == newArr[k]) {

                let sum = nums[j] + nums[k]

                if (sum > max) {

                    max = sum
                }
            }
        }

    }
    if (max == 0) {

        return -1
    } else {

        return max
    }
};

// Optimized Approch --> 



function maxNum2(nums){

    let max = -Infinity

    let a = -1
    let b = -1

    for(let i = 0 ; i<nums.length-1; i++){

        let num1 = nums[i]
        let digitSum1 = 0

        while(num1!=0){
            let val = num1%10
            digitSum1+=val
            num1 = Math.floor(num1/10)
        }

        for(let j = i+1 ; j<nums.length ; j++){

            let num2 = nums[j]
            let digitSum2 = 0
    
            while(num2!=0){
                let val = num2%10
                digitSum2+=val
                num2 = Math.floor(num2/10)
            }

            if(digitSum1 == digitSum2){
                
                let sum = nums[i] + nums[j]

                if(sum > max){
                    max = sum
                    a = nums[i]
                    b = nums[j]
                }
            }
        }
    }
    return max
}

console.log(maxNum2([18,43,36,13,7]))



function maximum1(nums) {

    let map = new Map()  // (digitSum , maxValueOfThatDigitSum)
    let max = 0


    for (let i = 0; i < nums.length; i++) {

        let digitSum = 0
        let value = nums[i]

        while (value != 0) {

            let digit = value % 10;

            digitSum += digit;

            value = Math.floor(value / 10)
        }

        if (map.has(digitSum)) {

            let totalSum = nums[i] + map.get(digitSum)

            if (totalSum > max) {

                max = totalSum

            }

            map.set(digitSum, Math.max(nums[i], map.get(digitSum)))

        }
        else {

            map.set(digitSum, nums[i])
        }
    }

    return (max == 0) ? -1 : max

};

console.log(maximum1([18, 43, 36, 13, 7]))




