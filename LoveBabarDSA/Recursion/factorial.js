// Tc --> number of node --> O(5) --> O(n)
// Sc ---> Height of Tower ---> O(n) --> O(5)

function factorial(n)
{
   //base Case
   if(n==0)  return 1

   // recursive relation

//    let smallerProblem = factorial(n-1)
//    let biggerProblems = n * smallerProblem // biggerProblem = n * factorial(n-1)

//    return biggerProblems // n * factoral(n-1)

     let partialAns = factorial(n-1)

   return n * partialAns
}

console.log(factorial(10))


