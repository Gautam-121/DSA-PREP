function printFibbonacciSeries(n){
    let a = 0 ;
    let b = 1 ;
    
    let str = a + " " + b + " "
    for(let i = 1 ; i<=n-2 ; i++){
        sum = a + b ;
        a = b ;
        b = sum ;
        str = str + sum + " "
    }
    return str
}

console.log(printFibbonacciSeries(10))


function printFibbonacciNumber(n){
    let a = 0 ;
    let b = 1 ;
    
    let sum = 0
    for(let i = 1 ; i<=n-2 ; i++){
        sum = a + b ;
        a = b ;
        b = sum ;
    }
    return sum
}

console.log(printFibbonacciNumber(10))
