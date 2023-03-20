function maxMinDiff(arr){
    
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE
    for(let i = 0 ;i<arr.length ; i++){
        if(arr[i]>max){
            max = arr[i]
        }
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return (max - min)
}

console.log(maxMinDiff([1,2,3,4,5]))


