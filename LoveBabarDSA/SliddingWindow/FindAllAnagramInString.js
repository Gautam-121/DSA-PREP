/*

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

/*

/*

what is anagram --->  str1 and str2 , both have same length also frequency of str1 of each element 
is equal to frequency of each element of str2

brute force , k = str2.length , stored frequency of str2 in map1

first for loop for iterate each element upto (arr.length - k)
second for loop for createting string of (window size k)  , and stored frequency of character in map2
of window size k

after that used  for loop and check map1 and map2 of newStr element of frequency is same or  not

if same then push in ans array , ans.push(i)
if not then break 


*/





function allAnagram(str1 ,str2)
{

    if(str1.length < str2.length)
    {
        return []
    }

    let k = str2.length
    let ans = []

    let map1 = new Map()

    for(let i = 0; i<str2.length ; i++)
    {
        map1.set(str2[i] , (map1.get(str2[i]) || 0) + 1)
    }

    for(let i = 0 ; i<=str1.length-k ; i++) 
    {
        let newStr = ""
        let map2 = new Map()

        for(let j = i ; j<i+k ; j++)
        {
            newStr+=str1[j]
            map2.set(str1[j] , (map2.get(str1[j]) || 0) + 1)
        }

        let isPos = true

        for(let i = 0 ; i<newStr.length ; i++)
        {
            if(map1.get(newStr[i]) !== map2.get(newStr[i]) )
            {
                isPos = false
                break;
                
            }
        }

        if(isPos) 
        {
            ans.push(i)
        }
    }
    return ans
}

console.log(allAnagram("cbaebabacd" , "abc"))


function isAllAnagram(str1 , str2)
{
    if(str1.length < str2.length)
    {
        return []
    }

    let map = new Map()
    let k = str2.length

    for(let i = 0 ; i<str2.length ; i++)
    {
        map.set( str2[i] , (map.get( str2[i]) || 0) + 1)
    }

    let i = 0;
    let j = 0;
    let count = map.size
    let ans = []

    while(j<str1.length)
    {
        if(map.has(str1[j]))
        {
           map.set( str1[j] , map.get( str1[j]) - 1 )

           if(map.get( str1[j]) == 0)
           {
            count--
           }
        }

        if((j-i+1) < k)
        {
           j++
        }
        else if((j-i+1) == k)
        {
            if(count == 0)
            {
                ans.push(i)
            }

            if(map.has(str1[i]))
            {
                map.set( str1[i] , map.get(str1[i]) + 1)

                if(map.get(str1[i]) == 1)
                {
                    count++
                }
            }
            i++
            j++
        }

    }
    return ans
}

console.log(isAllAnagram("cbaebabacd" , "abc"))























