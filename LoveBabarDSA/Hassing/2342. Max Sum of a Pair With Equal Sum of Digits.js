
/*
You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

*/

var maximumSum = function (nums) {

    function getDigitSum(num) {

        let total = 0

        while (num != 0) {

            let rem = num % 10;

            total = total + rem

            num = Math.floor(num / 10)
        }

        return total
    }

    let hash = {}
    let result = -1

    for (let i = 0; i < nums.length; i++) {

        const digit = getDigitSum(nums[i])  // 9


        if (hash[digit]) {
            result = Math.max(result, (nums[i] + hash[digit]))
        }

        hash[digit] = (Math.max(nums[i], (hash[digit] || nums[i])))


    }
    return result
};


console.log(maximumSum([18, 43, 36, 13, 7]))  // ans = 54