// use merge sort and calculate total inversion count




function merge(arr , start , end) {

    let mid = Math.floor(start + (end - start)/2)

    let len1 = mid - start + 1
    let len2 = end - mid


    let first = new Array(len1)
    let second = new Array(len2)

    let mainIndex = start;

    for(let i=0 ; i<first.length ; i++) {

        first[i] = arr[mainIndex++]
    }
    
     mainIndex = mid+1;

    for(let i=0 ; i<second.length ; i++) {

        first[i] = arr[mainIndex++]
    }

    mainIndex = 0;
    
    let index1 = 0;
    let index2 = 0;

    while(index1<first.length && index2<second.length) {

        if(first[index1] > second[index2]) {

            count+=(first.length-index1) // only this change gives count of inversion

            arr[mainIndex++] = second[index2++]
        }else{
            arr[mainIndex++] = first[index1++]
        }
    }

    while(index1<first.length) {
        arr[mainIndex++] = first[index1++]
    }

    while(index2<second.length) {
        arr[mainIndex++] = second[index2++]
    }
    
    return arr
}
 
function mergeSort(arr , start , end) {



    if(start>=end) return 

    let mid = Math.floor(start + (end - start)/2)

        // left part sort krna hai

        mergeSort(arr , start , mid )

        // right part sort krna hai4

        mergeSort(arr , mid+1 ,arr.length-1)

        // merge divide array

       return merge(arr , start , end)
    
    
}

let arr = [5,4,3,1,0]
console.log(mergeSort( arr, 0 , arr.length-1))