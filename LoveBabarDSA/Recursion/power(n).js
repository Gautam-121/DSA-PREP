// Tc --> number of node --> O(5) --> O(n)
// Sc ---> Height of Tower ---> O(n) --> O(5)
function power(x , n)
{
    // base case
    if(n == 0) return 1;

    // recursively recursion

    // let smallerProblem = power(n-1)
    // let biggerProblem = 2 *power(n-1)

    // return biggerProblem

    let partialAns = power(x , n-1)
    
    return x * partialAns
}


console.log(power(8, 5))


// Tc --> number of node --> 64 -- > 32 --> 16 --> 8 --> 4 --> 2 --> 1 -->0 --> O(logN)
// Sc ---> Height of Tower ---> O(64 -- > 32 --> 16 --> 8 --> 4 --> 2 --> 1 ) --> O(logN) -->


function power1(x , n)
{
    // base case
    if(n == 0) return 1;

    // recursively recursion

    // let smallerProblem = power(n-1)
    // let biggerProblem = 2 *power(n-1)

    // return biggerProblem

    let temp = power1(x , Math.floor(n/2))
    
    if(n&1 == 1) return temp*temp*x
    else{
        return temp*temp
    }
}

console.log(power1(3 , 15))



