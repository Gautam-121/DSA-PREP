function subStractProductSum(n){
    
    let product = 1;
    let sum = 0;

    while(n!=0){
        let rem = n%10;
        product*=rem;
        sum+=rem;
        n = Math.floor(n/10)
    }
    return (product - sum)
}

console.log(subStractProductSum(101))


