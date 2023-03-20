/*

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

 

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

function isPossible(arr , h , k)
{
    let eatHour = 0

    for(let i = 0 ; i<arr.length ; i++)
    {
        ans+=Math.ceil(arr[i]/k)

        if(ans > h) return false
    }

    return true
}

function kokoEat(arr , h)
{
    let start = 0;
    let end = Math.max(...arr)
    
    let ans = end
    let mid;

    while(start <= end)
    {
        mid  = start + (end - start)/2

        if(isPossible(arr , h , mid))
        {
            ans = mid
            end = mid - 1
        }
        else
        {
            start = mid + 1
        }
    }
    return ans
}

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23

*/

function minEatingSpeed(piles, h) {

    let sum = 0;

    for (let i = 0; i < piles.length; i++) {

        sum += piles[i]
    }

    function isPossible(piles, mid, h) {

        let hours = 0

        for (let i = 0; i < piles.length; i++) {

            if (mid >= piles[i]) {
                hours++
            }
            else {

                hours += Math.ceil(piles[i] / mid)
            }

            if (hours > h) break;
        }
        if (hours <= h) {
            return true
        }
        else {
            false
        }
    }

    let start = 0;
    let end = sum;
    let ans = sum

    let mid;

    while (start <= end) {

        mid = Math.floor(start + (end - start) / 2)

        if (isPossible(piles, mid, h) == true) {

            ans = mid;
            end = mid - 1
        }
        else {

            start = mid + 1
        }


    }
    return ans
}