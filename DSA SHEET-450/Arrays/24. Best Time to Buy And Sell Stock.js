/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
Accepted
2,851,052
Submissions
5,237,132

*/


// Brute Force   tC --> o(N^2)
// sc --> O(1)

function bestTimeBuySell(arr) {

    let max = 0

    for(let i = 0 ; i<arr.length ; i++) {

        for(let j = i+1; j<arr.length ; j++) {

            if(arr[i] < arr[j]) {
                
                max = Math.max(max , (arr[j] - arr[i]))
            }
        }
    }
    return max
}


// Tc --> O(N)  ,Sc  -> O(1)

/*

stored minBuy --> prices[0] ;

comapare at each day where the price is minThan our minBuy Prices 

then comapare MaxProfit , with current MaxProfit and update value

*/

function bestTimeBuySell(arr) {

    let minBuy = arr[0];
    let maxProdfit = 0;

    for(let i = 0 ; i<arr.length ; i++) {

        minBuy = Math.min(minBuy , arr[i]);

        maxProdfit = Math.max(maxProdfit , (arr[i] - minBuy))
    }

    return maxProdfit
}


