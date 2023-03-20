// Find kth largest/smallest , using quickSort find out the value

// using partition method findOut the kth largest/smallest element

function partition1(arr , start , end) {

    let i = start ;
    let j = start;

    let pivot = arr[end];

    while(i<=end) {
        
        if(arr[i] <= pivot) {
            [arr[i] , arr[j]] = [arr[j] , arr[i]]
            i++;
            j++
        }
        else{
            i++
        }
    }
   return (j-1)
}

function quickSelect(arr , start , end ,k ) {
       
    let pInedex =  partition1(arr , start , end)

    if(pInedex == k) {
        return arr[pInedex]
    }
    else if(pInedex > k) {
        return quickSelect(arr, start , pInedex-1 , k) 
    }
    else{
        return quickSelect(arr , pInedex+1 , end  , k)
    }
}

/*
if Kth Smallest Element --> find (k-1)--> (k-1) represent index of kth smallest element
if Kth largest Element --> find (arr.length - k) --> (arr.length - k) represent index of kth largest element
*/

let arr1  = [4,3,7,6,1,5]  // [1,3,4,5,6,7]
let k = 1
let kl = arr1.length - k 

let value = quickSelect(arr1, 0 , arr1.length-1 , kl) 
console.log(value)
