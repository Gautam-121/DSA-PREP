
// check perticular number is prime number Or not

// Tc --> O(n^1/2)

function primeNumber(n) {

    if(n<=0 || (n==1)) return false

    if(n == 2 ) return true

    for(let i = 2 ; i*i<=(n) ; i++) {  // i<= Math.sqrt(n)  ===> i*i <= n

        if(n%i == 0) {
              
            return false
        }
    }

    return true
}

console.log(primeNumber(46))

// Print all prime number upto n;
// Brute force approch

function allPrimeUptoN(n) {

    if(n<=1) return []

    let ans = []

    for(let  i = 2 ; i<n ; i++) { // O(n*n^1/2) ==> O(n^3/2)

        let number = i
        let isPrime = true

        if(number==2) {
            ans.push(2)
            continue;
        }

        for(let j = 2 ; j*j<=number ; j++) {

            if(number%j == 0) {
                isPrime = false
                break;
            }
        }
        if(isPrime) {
            ans.push(number)
        }
    }

    return ans
}

console.log(allPrimeUptoN(50))


// optimization approch --> Using sieve of erathronous

function allPrimeUptoN1(n) {
   
    let newArray = new Array(n+1)

    newArray.fill(true)

    newArray[0] = false
    newArray[1] = false

    for(let i = 2 ; i*i<=newArray.length ; i++) {

        if(newArray[i]) 
        {
            for(let j = i*i ; j<newArray.length ; j = j + i) 
            {
                newArray[j] = false

            }
            
        }
    }
    return newArray
}

console.log(allPrimeUptoN1(50))


function pattern(n) {

    let newStr = ""

    for(let i=1 ; i<=n ; i++) {

        for(let j=1 ; j<=n ; j++) {

            newStr+=i
        }

        newStr+="\n"
    }

    console.log(newStr)
}

pattern(5)

