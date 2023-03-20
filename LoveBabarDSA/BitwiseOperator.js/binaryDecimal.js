function binaryToDecimal(n){

    let deciNum =  0 ;
    let i = 0

    while(n!=0){
        let digit = n%10;
        if(digit){
            deciNum = deciNum + 2**i
        }
        n = Math.floor(n/10)
        i++
    }
    return deciNum
}

console.log(binaryToDecimal(101))



