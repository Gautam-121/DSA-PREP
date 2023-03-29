//  very fast sorting algorithm , tc --> O(nlogn)  , Divide and Conquir , divide upto no further dividation is possible
// then merge them into single array , used Merge tw sorted array to merge the array

class solution{
    constructor()
    {
        this.myCount = 0
    }
}

function merge(arr , start , end ) {

    let mid = Math.floor(start + (end - start)/2)

    let len1 = mid - start + 1  // 3  // [5,4,3,2,1] 
    let len2 = end - mid // 2

    let first = new Array(len1)  // 3  // [5 , 4 , 3]
    let second = new Array(len2)// 2  // [2 , 1]
     
    let k = start // main array index k represesnt start

    for(let i=0 ; i<len1 ; i++) {

        first[i] = arr[k]
        k++
        // mainIndex++
    }

      // main array index k represent mid+1

    for(let j=0 ; j<len2 ; j++) {

        second[j] = arr[k]
        k++
    }
    
    k = start; // main arr merge from start from index start
    
    let i = 0; // i --> Point first array
    let j = 0; // j --> point second array

    while(i<len1 && j<len2) {

        if(first[i] <= second[j]) {
            arr[k] = first[i]
            i++
        }else{
            arr[k] = second[j]
            j++
        }
        k++
    }

    while(i<len1) {
        arr[k] = first[i]
        k++
        i++
    }

    while(j<len2) {
        arr[k] = second[j]
        k++
        j++
    }
    
}
 
function mergeSort(arr , start , end) {



    if(start>=end) return 

    let mid = Math.floor(start + (end - start)/2)

        // left part sort krna hai

        mergeSort(arr , start , mid )

        // right part sort krna hai4

        mergeSort(arr , mid+1 ,end)

        // merge divide array

        merge(arr , start , end , mid)
    
}

let arr = [12 ,11, 13, 5 ,6, 7 , 6 , 14 , 11 , 12]
mergeSort( arr, 0 , arr.length-1)
console.log(arr)




// function merge(arr , start , end ) {

//     let mid = Math.floor(start + (end - start)/2)

//     let i = start
//     let j = mid + 1;
//     let k = start;

//     while(i<=mid && j<=end)
//     {
//         if(arr[i]<=arr[j])
//         {
//             arr[k] = arr[i];
//             i++
//         }
//         else if(arr[i] > arr[j])
//         {
//            arr[k] = arr[j]
//            j++
//         }
//         k++
//     }

//     while(i<=mid)
//     {
//         arr[k] = arr[i]
//         k++
//         i++
//     }
//     while(j<=end)
//     {
//         arr[k] = arr[j]
//         k++
//         j++
//     }
// }
 
// function mergeSort(arr , start , end) {



//     if(start>=end) return 

//     let mid = Math.floor(start + (end - start)/2)

//         // left part sort krna hai

//         mergeSort(arr , start , mid )

//         // right part sort krna hai4

//         mergeSort(arr , mid+1 ,end)

//         // merge divide array

//         merge(arr , start , end )
    
// }

// let arr = [12 ,11, 13, 5 ,6, 7 , 6 , 14 , 11 , 12]
// mergeSort( arr, 0 , arr.length-1)
// console.log(arr)



