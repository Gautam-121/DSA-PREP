/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/

// Brute force O(n^3) , sc--> O(n)

function threePairSum(arr) {

    let set = new Map()

    arr.sort((a,b)=>a-b)

    let newArr = []
    for(let i = 0 ; i<arr.length-2; i++) {
        for(let j=i+1 ;j<arr.length-1 ;j++) {
            let min = -1000
            if(arr[i] + arr[j] !== min) {
                min = (arr[i] + arr[j])
                for(let k= j+1 ;k<arr.length ;k++) {
                    if((arr[i] + arr[j] + arr[k]) == 0) {
                        let temp = []
                        temp.push(arr[i])
                        temp.push(arr[j])
                        temp.push(arr[k])
                        newArr.push(temp)
                        break;

                        
                    }
    
                }
                break;
            }
            
        }
    }
    return newArr
}

console.log(threePairSum([0,0,0,0])) // [-4,-1,-1,0,1,2]


// Optimal approch --> 

/*

step-1 ---> first sort the arry

step-2 ----> take one point at iTh index using for loop

step-3 -----> then using two pointer approch 

place j = i+1
      k = arr.length-1

      check((arr[i] + arr[j] + arr[k]) == 0) {
            
           stord ans

        move j ponter upto next_Distinct element Not found while{j++}
        move k pointer upto next_Distinct element Not found while(k--)

        j++
        k--
      }
      else if((arr[i] + arr[j] + arr[k]) < 0) {
        j++
      }
      else{
        k--
      }
   }

   move i pointer upto next_Distinct element Not found while{i++}

*/



var threeSum = function(nums) {
    
    nums.sort((a, b) => a - b); // -4 , -1 , -1 ,  0 , 1 , 2
    
    let ans = []
    
    
    for (let i = 0; i <nums.length-2; i++) {
    
    
        let j = i+1;
        let k = nums.length - 1;
    
        while (j < k) {
    
    
            let sum = (nums[j] + nums[k])
    
            if (sum + nums[i] == 0) {
    
                let temp = [nums[i], nums[j], nums[k]]
    
                ans.push(temp)
    
    
                while (nums[j] == nums[j + 1] && j < k) {
                    j++
                }
    
                while (nums[k - 1] == nums[k] && j < k) {
                    k--
                }
                
                j++
                k--
    
            }
            else if (sum + nums[i] < 0) {
    
                j++
            }
            else {
    
                k--
            }
    
          }
         while (nums[i + 1] == nums[i] && i<nums.length-2) {
                i++
        }
    }
    return ans
};


console.log(threeSum([-1,0,1,2,-1,-4]))


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
                j++
            }
            else 
            {
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