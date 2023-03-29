// Tc --> 1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 + ......... G.P (series) 

  // Gp --> r^n - 1 / r - 1   , 2^n - 1 / 2 - 1 --> O(2^n)

  //sc --> O(n)
  
 function fibo(n)
 {
     // base case 
     if(n==1 || n==2) return 1

     // recursively

     let partialAns1 = fibo(n-1)
     let partialAns2 = fibo(n-2)

     return partialAns1 + partialAns2
 }

 console.log(fibo(11))




 












 function fib(n){

  if(n == 0) return 0
  if(n == 1) return 1

  let fibNum = fib(n-1) + fib(n-2)

  return fibNum
 }

 console.log(fib(6))