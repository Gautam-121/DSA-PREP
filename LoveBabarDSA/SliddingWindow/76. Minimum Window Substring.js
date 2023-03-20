/*

Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

*/


var minWindow = function(s, t) {

    if(s.length < t.length) return ""
    
   let map = new Map()

   for(let i = 0 ; i <t.length ; i++)
   {
       map.set( t[i] , (map.get(t[i]) || 0) + 1)
   }
   
   let count = map.size
   let start = -1;
   let end   = -1;

   let i = 0;
   let j = 0;
   let min = Infinity

   while(j<s.length)
   {
       if(map.has(s[j]))
       {
           map.set( s[j] , map.get(s[j]) - 1)

           if(map.get(s[j]) == 0) count--
       }

       if(count > 0) j++;

       else if (count == 0)
       {

           while( count == 0 )
           {

             let winLen = (j-i+1)

             if(winLen < min)
             {
                 min = winLen
                 start = i;
                 end   = j
             }

               if( map.has(s[i]))
               {
                   map.set( s[i] , map.get(s[i]) + 1)

                   if(map.get(s[i]) == 1) count++
               }
               i++
           }
           j++
       }
   }
   if( start == - 1 || end == -1) return ""

   let str =""

   for(let i = start ; i<=end ; i++)
   {
      str+=s[i]
   }

   return str
};


console.log(minWindow("ADOBECODEBANC" , "ABC"))