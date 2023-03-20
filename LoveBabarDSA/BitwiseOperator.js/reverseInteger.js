function reverseInteger(n){
    
    let ans = 0;

    while(n!=0){
        let rem = n%10;
        if(ans>Number.MAX_VALUE/10 || ans<Number.MIN_VALUE/10) return 0;
        ans = ans*10 + rem
        n = Math.floor(n/10)
    }
    return ans
}

console.log(reverseInteger(1122521465))



