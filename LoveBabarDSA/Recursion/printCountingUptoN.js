function printCounting(n)  // Tail Recursion
{
    // base case
    if(n == 0) return

    // proccesing 
    console.log(n)

    // recursively
    printCounting(n-1)

}

// printCounting(5)
// Tc --> number of node --> O(5) --> O(n)
// Sc ---> Height of Tower ---> O(n) --> O(5)
function printCounting1(n)  // head Recursion
{
    // base case
    if(n == 0) 
    {
        return;
    }
    // recursively
    printCounting(n-1)

    // proccesing 
    console.log(n)
}

printCounting1(5)




