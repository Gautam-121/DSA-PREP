// in quick sort , is also Divide and conquir , but used Partition method to sort the array 

function Partition(arr , start , end) {

    // 0 to j-1  -->  <= pivot
    // j to i-1  -->  >pivot

    // pivot --> j-1

    let i = start;
    let j = start;

    let pivot = arr[end];

    while(i<=end) {
        
        if(arr[i] <= pivot) {
            [arr[i++] , arr[j++]] = [arr[j] , arr[i]]
        }
        else{
            i++
        }
    }
   return (j-1)
}

function quickSort(arr , start , end) {
    
      // base case
    if(start >= end)  return

    let p = Partition(arr , start , end)

    // left part ko sambalna hai 
    quickSort(arr , start , p-1)

    // right part ko sambalna hai
    quickSort(arr , p+1 , end)
}

let arr = [2,4,1,6,9,9,9,9,9,9]
quickSort(arr , 0 ,9)
console.log(arr)














