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











function isPrime(n){

    let arr = new Array(n+1).fill(true)

    arr[0] = false
    arr[1] = false


    for(let i = 2 ; i<arr.length ; i++){

        if(arr[i]){

            for(let j = i*i ; j<arr.length ;j = j + i ){
                arr[j] = false
            }

            if(i*i > arr.length){
                break
            }
        }
    }

    let arr1 = []
    let arr2 = []

    for(let i = 2; i<arr.length ; i++){
        
        if(arr[i]){
            arr1.push(i)
        }
        else{
            arr2.push(i)
        }
    }

    console.log(arr1)
    console.log(arr2)
}

console.log(isPrime(50))











