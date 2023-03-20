function swapAlternate(arr){

    let i = 0 ;
    let j = i + 1;

    while(j<arr.length) {
       
        [arr[i],arr[j]] = [arr[j],arr[i]] 

        i+=2;
        j+=2;
    }

    return arr
}

console.log(swapAlternate([1,2,3,4,5,6,7,8,9,10]))





