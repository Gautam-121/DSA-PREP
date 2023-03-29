//  At each iteration smallest element shift to the left side

// If n element , (n-1) iteration take place 


function selectionSort(arr) {

    for(let i=0 ; i<arr.length-1 ; i++) {

        let min = i

        for(let j = i+1 ; j<arr.length ; j++ ) {

            if(arr[j] < arr[min]  ) {

                min = j
            }
        }
        
        [arr[i] , arr[min]] = [arr[min] , arr[i]]
    }
    return arr
}

console.log(selectionSort([5,9,8,2,1]))










// function merge(arr , start , end , mid) {


//     let len1 = mid - start + 1  // 3  // [5,4,3,2,1]
//     let len2 = end - mid // 2

//     console.log(len1 , len2)

//     let first = new Array(len1)  // 3  // [5 , 4 , 3]
//     let second = new Array(len2)// 2  // [2 , 1]


//     for(let i=0 ; i<len1 ; i++) {

//         first[i] = arr[start+ i]
//         // mainIndex++
//     }
//     console.log(first)
//     for(let j=0 ; j<len2 ; j++) {

//         second[j] = arr[mid + 1 + j]
//     }

//     // console.log(first , second)
    
//     let k = start; // main arr
    
//     let i = 0; // first
//     let j = 0; // second

//     while(i<len1 && j<len2) {

//         if(first[i] <= second[j]) {
//             arr[k] = first[i]
//             i++
//         }else{
//             arr[k] = second[j]
//             j++
//         }
//         k++
//     }

//     while(i<len1) {
//         arr[k] = first[i]
//         k++
//         i++
//     }

//     while(j<len2) {
//         arr[k] = second[j]
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

//         merge(arr , start , end , mid)
    
// }

// let arr = [12 ,11, 13, 5 ,6, 7 ]
// mergeSort( arr, 0 , arr.length-1)
// console.log(arr)


function selectionSort1(arr){

    for(let i = 0 ; i<arr.length-1; i++){

        let min = arr[i]
        let swapIndex = i

        for(let j = i+1 ; j<arr.length ; j++){

            if(arr[j] < min){
                min = arr[j]
                swapIndex = j
            }
        }

        [arr[i] , arr[swapIndex]] = [arr[swapIndex] , arr[i]]
    }
}

let arr = [21,11,10,9,8,7,6]
selectionSort1(arr)
console.log(arr)


