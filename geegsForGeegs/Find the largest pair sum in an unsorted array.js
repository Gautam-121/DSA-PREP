// Given an unsorted of distinct integers, find the largest pair sum in it.
// For example, the largest pair sum in {12, 34, 10, 6, 40} is 74.
// Difficulty Level: Rookie 
// Expected Time Complexity: O(n) [Only one traversal of an array is allowed]


// brute force , Tc --> O(N^2) , Sc ---> O(1)

function largstPairSum(arr) {

    let max = 0

    for(let i =0 ;i<arr.length ; i++) {


        for(let j = i+1 ; j<arr.length ; j++) {
          
            max = Math.max( max , (arr[i] + arr[j]))
            
        }
    }
    return max
}

console.log(largstPairSum([12, 34, 10, 6, 40]))


// using HashMap --> Tc ->> O(N) , SC --> O(N)

// This problem mainly boils down to finding the largest and second-largest element in an array. We can find 
// the largest and second-largest in O(n) time by traversing the array once. 

 /* Function to return largest pair sum. Assumes that
   there are at-least  two elements in arr[] */

 function largstPairSum1(arr) {

    // Initialize first and second largest element

    let IstLargest;
    let IIndLargest;

    if(arr[0] > arr[1]) {
        IstLargest = arr[0];
        IIndLargest = arr[1]
    }else{
        IstLargest = arr[1]
        IIndLargest = arr[0]
    }

    // Traverse remaining array and find first and second
    // largest elements in overall array

    for(let i =2 ;i<arr.length ; i++) {

        /* If current element is greater than first then
          update both first and second */

        if(arr[i] > IstLargest) {
            IIndLargest = IstLargest;
            IstLargest = arr[i]
        }

        /* If arr[i] is in between first and second then
         * update second  */
        else if(arr[i] > IIndLargest)  {
             
            IIndLargest = arr[i]
        }
    }
     
    return (IstLargest + IIndLargest)
 }

 console.log(largstPairSum1([12, 34, 10, 6, 40 , 40]))

