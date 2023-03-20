/*

You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.

Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.

Example 1:

Input: cards = [3,4,2,3,4,7]
Output: 4
Explanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3.
Note that picking up the cards [4,2,3,4] is also optimal.

*/
var minimumCardPickup = function(cards) {
    
    let map = new Map()
    let min = Infinity
 
    for(let  i = 0 ; i<cards.length ; i++)
    {
        if(map.has(cards[i]))
        {
            min = Math.min( min , i - map.get(cards[i]) + 1 )
 
            map.set( cards[i] , i)
        }
        else
        {
           map.set( cards[i] , i)
        }
    }
     
     return (min == Infinity) ? -1 : min
 };