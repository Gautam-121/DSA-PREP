function countWays(n)
{
    // base case
    if(n<0) return 0;
    if(n == 0) return 1

    // recursive relation

    let ans = countWays(n-1) + countWays(n-2)

    return ans
}

console.log(countWays(15))