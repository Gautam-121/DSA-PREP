// Brute Force , TC= O(N^2)


/*

[-5,3,2,0,12,-4,-15] , k = 3
           i
take for loop upto --> arr.length-k , in this case k = 3 , i.e i goes upto 12;

take another loop to calculate sum of k - window  , j=i , upto j<i+k 

calculate sum+=arr[j] , after remove second loop check sum > max , update max = sum

*/
function maxSumOfSubArray(arr , k) {

    let maxSum = 0 ;

    for(let i = 0 ;i<=arr.length-k; i++) {

        let currentSum = 0

        for(let j = i ; j<i+k ; j++) {
            
            currentSum+=arr[j]
            
        }
        maxSum = Math.max(maxSum , currentSum)
    }

    return maxSum
}

let arr = [2,3,5,2,9,7,1]

console.log(maxSumOfSubArray([2,3,5,2,9,7,1],3))

//Using Sliding Window Concept T.C= O(N) , SC = O(1)

function maximumSumSubarray(K, Arr) {
    //code here
    let currentSum = 0; // 300
    let maxSum = 0;
    
    for(let i=0 ; i<K ; i++) {
        currentSum+=Arr[i]
    }
    
    maxSum = currentSum ;
    
    for(let i=K ;i<Arr.length; i++) {
        currentSum+=Arr[i];
        currentSum-=Arr[i-K]
        maxSum = Math.max(maxSum , currentSum)
    }
    
    return maxSum
  }


  /*

sliding window approch , start i ans j pointer from , 0-th index;

while(j<arr.length)

calculate sum upto "window" size less than "k"

like if (j-i+1 < k) j++

once window size meet k , stored  "ans" ,  decrease sum by ith pointer value and moves i ponter by one postion ahead

else if(j-i+1 == k)
{
    // 1 --> store ans max = Math.max( max , sum)
    // 2 --> decrease sum , sum-=arr[i]
    // 3 --> increase i++ , j++
}

  */


  function maxSumOfSubArray3(arr, k ) {
    //code here
    let i = 0;
    let j = 0
    let sum = 0
    let max = 0

    while(j<arr.length) {

        sum+= arr[j];

        if((j-i+1) < k ) {
            j++
        }else if(j-i+1 == k) {

            if(sum > max)
            {
                max = sum;
                start = i;
                end   = j
            }

            sum-=arr[i];
           i++;
           j++
        }
    }
    console.log(start , end)
   return max
  }

  console.log(maxSumOfSubArray3([2,3,5,2,9,7,1],3))
