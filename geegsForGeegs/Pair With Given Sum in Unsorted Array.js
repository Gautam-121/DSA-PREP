/*
Table of Contents
Brute Force Approach to Find Pair With Given Sum in Unsorted Array
Two Pointer Approach to Find Pair With Given Sum in Unsorted Array
Hashing Approach to Find Pair With Given Sum in Unsorted Array

*/

// Brute Force Approach to Find Pair With Given Sum in Unsorted Array
// Approach: In this method, check for all possible pairs if their sum is equal to the number k. 
// If a valid pair is found, return true otherwise return false. 
// Below we have shown the implementation of the described approach to solve pair with given sum 
// in unsorted array in C++.

//Tc --> O(n^2) sc --> O<(1)
function PairWithGivenSuminUnsortedArray(arr , x) {

    let ans = []

       for( let i =0 ;i<arr.length ; i++) {

        for(let j = i+1 ; j<arr.length ; j++) {

            if(arr[i] + arr[j] == x) {

                let temp = [];
                temp.push(arr[i], arr[j])
                ans.push(temp)
            }
          }
       }
       return ans
    }

/*
Two Pointer Approach to Find Pair With Given Sum in Unsorted Array
Approach: Firstly sort the array and then take two pointers, 
one at the beginning and another at the end of the sorted array. 
If the sum of the numbers is equal to k, return true. 
If the sum is greater than k, shift the right pointer to decrease the sum, else if the sum is lesser than k, 
shift the left pointer to increase the sum. Once pointers cross each other, which means no valid pair is present,
 then return false. Let’s understand this approach with an example.

Input: nums = [3, 2, 8, 15, -8]
          k = 17
After sorting the array we have nums = [-8, 2, 3, 8, 15]
Now let's initialize two pointers, i.e., i=0 and j=n-1 = 4(where n is the size of array).
nums[i]+nums[j] = -8+15 = 7<17. Therefore, we'll increment the value of i. Now i=1 and j=4
nums[i]+nums[j] = 2+15 = 17. Here we have found a pair which satisfies the criteria and hence we return true
*/
 
//Tc --> O(nlogn) , Sc --> (O(1))
function PairWithGivenSuminUnsortedArray(arr , x) {

    ans.sort((a,b) => a-b)

    let i =0 ;
    let j = arr.length-1

    while(i<j) {

        if(arr[i] +arr[j] == x) {

               let temp = [];
                temp.push(arr[i], arr[j]) //on finding a valid pair the function returns true
                ans.push(temp)
                i++;
                j--
            }
        else  if(arr[i] + arr[j] > x) { //if sum of the element is greater than k we shift j to the left
            j--
        }
        else  if(arr[i] + arr[j] < x) {//if sum of the element is lesser than k we shift i to the right
            i++
        }
    }
    return ans
}


/*
Hashing Approach to Find Pair With Given Sum in Unsorted Array
One of the common mistakes that students commit using hashing is that they first insert 
everything in a hash table and then traverse through the array to find the (sum – arr[i]) element in the hash
 table. To visualize the problem let’s take an example.

 Correct Approach: Insert elements into the hash table one by one from the given array, 
 but before that check, if it forms a pair with an existing element of the hash table.



Given nums = {8, 3, 2, 5} and k = 6. Now the problem is that you’ll find a valid pair once you 
reach nums[1] i. e., 3, and find 6-3 = 3 in the hash table. You’ll return true but you had to 
return a false value because if you look at the array, you’ll not find a valid pair with a given sum.

*/

function allPairs(arr , X){
    //code here
    
    
    let set = new Set()
    let ans = []
    
    
    
    for(let  i = 0 ; i<arr.length ; i++) {
        
        let current_Sum = X - arr[i]
        
        if(set.has(current_Sum)) {
            
            let temp = []
            
            temp.push(arr[i] , current_Sum)
            ans.push(temp)
            
        }
    }
    return ans
}