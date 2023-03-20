// print first n fibonacci number

function printFib(n) {

    let a = 0;
    let b = 1;

    let str  = a + " " + b + " "

    for(let i=1 ; i<n-1 ;i++) 
    {

        sum = a + b
        str += sum + " "
        a = b;
        b = sum;
    }
    
    console.log(str)
}

(printFib(10))

// Return nth fibbonacci number

function printFib1(n) {

    let a = 0;
    let b = 1;

    let sum;

    for(let i=1 ; i<n-1 ;i++) 
    {

        sum = a + b
        a = b;
        b = sum;
    }
    
    console.log(sum)
}

(printFib1(10))


