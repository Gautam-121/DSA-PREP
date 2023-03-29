function printTriangle(n){

    if(n == 0){
        return 
    }

    for(let i = 0 ; i<n ; i++){
        console.log("*")
    }
    console.log("\n")
    printTriangle(--n)
}

printTriangle(4)

function printTriangle1(n){

    if(n == 0){
        return 
    }

    printTriangle1(--n)

    for(let i = 0 ; i<n ; i++){
        console.log("*")
    }
    console.log("\n")
}

printTriangle1(4)

function bubbleSort(arr , n){

    if(n == 0 || n == 1){
        return
    }

    for(let i = 0 ; i<n-1; i++){
        if(arr[i] > arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        }
    }

    bubbleSort(arr , --n)
}

let arr = [5,4,3,2,1]

bubbleSort(arr , 5)

console.log(arr)