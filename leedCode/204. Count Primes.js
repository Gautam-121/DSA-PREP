/*

Given an integer n, return the number of prime numbers that are strictly less than n.

 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:
0000
Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0

*/

// SeiveOfErathrones Algorithm

var countPrimes1 = function(n) {
   
    let prime = new Array(n);
    let cnt = 0
    
    prime.fill(true)
        
    prime[0] = false;
    prime[1] = false;
    
    for(i = 2 ; i<prime.length ; i++) {
        
        if(prime[i]) {
            
            cnt++
            
            for(let j = 2*i ; j<n ; j = j+i) {
                
                prime[j] = false
            }
        }
        
    }
    
    return cnt
};

console.log(countPrimes1(100))


var countPrimes = function(n) {
   
    let prime = new Array(n);
    let cnt = 0
    
    prime.fill(true)
        
    prime[0] = false;
    prime[1] = false;
    
    for(i = 2 ; i*i<prime.length ; i++) {
        
        if(prime[i]) {
            
            cnt++
            
            for(let j = i*i ; j<n ; j = j+i) {
                
                prime[j] = false
            }
        }
        
    }
    
    return cnt
};

console.log(countPrimes(100))

