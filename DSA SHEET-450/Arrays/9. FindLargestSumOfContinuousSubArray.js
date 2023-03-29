// Kadane's Algorithm

// Tc --> O(N)  , Sc --> O(1)


function maxSubarraySum(arr, N){
    // code here
    
    let max = -Infinity;
    let sum = 0
    let j = 0
    let startIndex = 0;
    let endIndex = 0
    
    for(let i =0 ;i<arr.length ; i++) {
        
        sum+=arr[i]  // step -1
        
        if(sum > max) { // step--> 2

            max = sum ;
            startIndex = j
            endIndex = i
        } 
        
        if(sum < 0) {  // step --> 3
            sum  = 0
            j = i + 1
        }
        
    }

    console.log(startIndex , endIndex , max)
    let newArr = []
    for(let i = startIndex ; i<=endIndex ; i++) {

          newArr.push(arr[i])
    }

    return newArr
} 

console.log(maxSubarraySum([-5, 4, 6, -3, 4, 1]))
























