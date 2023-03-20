function primeNumberArray(arr){
   
    let newArr = []
    for(let i =0;i<arr.length;i++){
        let value = arr[i];
        let isPrime = true;
        if(value == 1){
            continue;
        }
        for(let j =2 ;j<value;j++){
            if(value%j == 0){
                isPrime = false
                break;
            }
        }
        if(isPrime){
            newArr.push(value)
        }
    }
    return newArr
}


console.log(primeNumberArray([1 , 2,3,5,7,9]))