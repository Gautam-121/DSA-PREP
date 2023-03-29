// T.C ==> (K * N) ; S.C --> (1) USING INBULT SORT ---> T.C --> n*logN

// Tc --> AverageCase --> O(n) , sc --> O(1)  
// TC --> Worst case --> O(n^2) , sc -->O(1)

function partition1(arr , start , end) {

    // 0 to j-1  -->  <= pivot
    // j to i-1  -->  >pivot

    // pivot --> j-1

    let i = start;
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

function quickSort(arr , start , end ) {

    if(start>=end) return 
       
    let pInedex =  partition1(arr , start , end)

    // left side sambal ;
    quickSort(arr , start , pInedex-1)

    // right side sambal ;
    quickSort(arr , pInedex+1 , end)
}

let arr  = [4,3,7,6,1,5,7]  // [1,3,4,5,6,7]

quickSort(arr , 0 , arr.length-1)


/*
if Kth Smallest Element --> find (k-1)--> (k-1) represent index of kth smallest element
if Kth largest Element --> find (arr.length - k) --> (arr.length - k) represent index of kth largest element
*/

function partition(arr , start , end){

    let i = start
    let j = start
    let pivot = arr[end]

    while(i<=end){

        if(arr[i] <= pivot){
            [arr[i] , arr[j++]] =  [arr[j] , arr[i]]
        }

        i++
    }

    return j-1
}


function quickSelect(arr , start ,end , k){

    let partitionIndex = partition(arr , start , end)

    if(partitionIndex == k) return arr[k]

    if(partitionIndex < k){
        return quickSelect(arr , partitionIndex + 1 , end , k)
    }

    if(partitionIndex > k){
        return quickSelect(arr , start ,  partitionIndex - 1 , k)
    }

}

let arr1  = [4,3,7,6,1,5,7]  // [1,3,4,5,6,7]
let k = 2
let kl = arr1.length - k 

let value = quickSelect(arr1 , 0 , arr1.length-1 , kl) 



















