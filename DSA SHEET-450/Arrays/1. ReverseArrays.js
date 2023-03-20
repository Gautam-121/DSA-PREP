//TC --> O(N) , SC --> (1)

function reverse(arr) {

    let i = 0; //point --> start Index Zero
    let j  = arr.length - 1; // Point --> EndnIndex Last

    while(i<j) {

        [arr[i] , arr[j]] =  [arr[j] , arr[i]]  // swap start and end position
        
        i++;
        j--
    }
    return arr
}

console.log(reverse([1,2,3,4,5]))



function reverseFromIndexK(arr , k) {

    let i = k; //point --> start Index Zero
    let j  = arr.length - 1; // Point --> EndnIndex Last

    while(i<j) {

        [arr[i] , arr[j]] =  [arr[j] , arr[i]]  // swap start and end position
        
        i++;
        j--
    }
    return arr
}

console.log(reverseFromIndexK([1,2,3,4,5],2))   // reverse from k 




