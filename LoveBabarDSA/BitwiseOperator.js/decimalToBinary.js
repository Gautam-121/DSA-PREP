function decimalToBinaryConersion(n){
    
    let ans = 0;
    let i = 0
    while(n!=0){

        let digit = n%2 ;
        ans = (digit * 10**i) + ans;
        i++;
        n = Math.floor(n/2)
    }
    return ans
}

console.log(decimalToBinaryConersion(10))

function decimalToBinaryConersion2(n){
    
    let ans = 0;
    let i = 0
    while(n!=0){ //1010

        let digit = n&1;
        ans = (digit * 10**i) + ans;
        i++;
        n = n>>1
    }
    return ans
}

console.log(decimalToBinaryConersion2(10))



