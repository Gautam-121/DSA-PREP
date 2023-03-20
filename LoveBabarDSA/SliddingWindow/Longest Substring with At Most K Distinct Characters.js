/*

Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:
Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.

Example 2:
Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.

*/

function longestSubstringThatContainsAtMostKdistinctCharacters(s, k) {

          
    let map = new Map()

    let i = 0 ;
    let j = 0;

    let max = 0


    while(j< s.length) {

        if(map.has(s[j])) {

            map.set(s[j] , map.get(s[j]) + 1)

        }else{

            map.set(s[j] , 1)
        }

        if(map.size <= k) {

            max = Math.max( max , j-i+1 )
            j++

        }
        else {
            while(map.size > k) {

                if(map.has(s[i])) {

                     map.set(s[i] , map.get(s[i]) - 1)

                    if(map.get(s[i]) == 0) {

                        map.delete(s[i])
                    }
                }
                i++
            }
          j++
        }
    }
    return max
}



console.log(longestSubstringThatContainsAtMostKdistinctCharacters("aabbccaccaa",2))

