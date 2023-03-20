/*

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

*/


/*

use sliding window concept ---> 1) create window of size needle 
  2) check this created window size string  ---> less , equal , or greater than window size

  if(less) -->> increase j++
  if(equal) --> check (str == needle) if(yes) return i+1 , if(No) j++
  if(greater) --> remove first character from str , then check (str == needle) if(yes) return i+1 , if(No) i++ , j++



*/

var strStr = function (haystack, needle) {

    let i = 0;
    let j = 0

    let window = needle.length

    let str = ""

    while (j < haystack.length) {

        str += haystack[j]

        if (str.length < window) {
            j++
        }
        else if (str.length == window) {

            if (str == needle) {
                return i
            }
            j++
        }
        else {

            str = str.slice(1)

            if (str.length == window) {

                if (str == needle) {
                    return i + 1
                }
            }
            i++
            j++
        }
    }
    return -1
};

