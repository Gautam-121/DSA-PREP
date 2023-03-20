/*

Given a string, find the length of the longest substring T that contains at least k distinct characters.

Example 1:
Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.

Example 2:
Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.

*/

function size(str , k)
{
    let map = new Map()

    let i = 0;
    let j = 0;
    let max = -1

    while(j<str.length)
    {
        map.set( str[j] , (map.get(str[j]) || 0) + 1)

        if(map.size < k) j++

        else if(map.size >=k)
        {
            return Math.max(max , (str.length-i))
            
        }
    }
    return max
}

console.log(size("aa" , 1))



function longestSubstringThatCointAtLeastKdistinctChar(s, k) {
    
    let obj = {}

    let i = 0;
    let j = 0;
    let max = 0;
    let count = 0;

    while(j<s.length) {

        if(obj[s[j]]) {
            obj[s[j]]+=1
        }else{
            obj[s[j]] = 1
            count++
        }

        if(count >= k) {
            max = Math.max(max , (j-i+1))
            j++
        }
        else{
           j++
        }
    }
    if(max == 0) return - 1

    return max
}

console.log(longestSubstringThatCointAtLeastKdistinctChar("aa" , 1))