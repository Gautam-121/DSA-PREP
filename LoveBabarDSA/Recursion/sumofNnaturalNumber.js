// Tc --> number of node --> O(5) --> O(n)
// Sc ---> Height of Tower ---> O(n) --> O(5)
function sumNnatural(n)
{
    // base case
    if(n==1) return 1

    // recursively
    let partialAns =  sumNnatural(n-1)

    return n + partialAns
}

console.log(sumNnatural(5))





