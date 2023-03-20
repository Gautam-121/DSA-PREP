/*
Given a string you need to print the size of the longest possible substring that has exactly K unique characters. If there is no possible substring then print -1.


Example 1:

Input:
S = "aabacbebebe", K = 3
Output: 7
Explanation: "cbebebe" is the longest 
substring with K distinct characters.

*/

function longest(str , k)
{
    let i = 0;
    let j = 0;

    let map = new Map()
    let max = -Infinity

    while(j<str.length)
    {
        map.set(str[j] , (map.get(str[j]) || 0) + 1)

        if(map.size < k)
           j++
        
        else if (map.size == k)
        {
            max = Math.max( max , (j-i+1))
            j++
        }
        
        else 
        {
            while(map.size > k)
            {
                map.has(str[i])
                {
                    map.set(str[i] , map.get(str[i]) - 1)

                    if(map.get(str[i]) == 0) map.delete(str[i])
                }
                i++
            }
            j++
        }
    }
    
    return (max == -Infinity) ? -1 : max
}

console.log(longest("aabacbebebe" , 3))