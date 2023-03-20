function isPrime(n){
    
    let prime = []
    let notPrime = []


    for(let i = 1 ;i<=n ;i++){
        if(i==1){
            notPrime.push(i)
            continue;
        }
        let isPrime = true
        for(let j =2 ;j<i ;j++){
            if(i%j==0){
                isPrime = false;
                break;
            }
        }
        if(isPrime) {
            prime.push(i)
        }else{
            notPrime.push(i)
        }
    }
    return (prime)
}


console.log(isPrime(22))