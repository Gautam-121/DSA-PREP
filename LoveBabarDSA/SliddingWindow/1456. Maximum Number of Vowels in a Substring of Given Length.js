/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

*/


function vovel(char)
{
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"  )
    {
        return true
    }
    return false
}


function numberOfVowels(str , k)
{
    let i = 0;
    let j = 0;

    let count = 0;
    let max = -Infinity

    while(j<str.length)
    {
        if(vovel[str[j]])
        {
             count++
        }

        if((j-i+1) < k)
        {
            j++
        }
        else if ((j-i+1) == k)
        {
            max = Math.max( max , count)

            if(vovel(str[i]))
            {
                count--
            }
            i++
            j++
        }
    }
    return max
}



















