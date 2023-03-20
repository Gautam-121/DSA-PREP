/*

Given two strings of lowercase alphabets and a value K, your task is to complete the given function which tells if  two strings are K-anagrams of each other or not.

Two strings are called K-anagrams if both of the below conditions are true.
1. Both have same number of characters.
2. Two strings can become anagram by changing at most K characters in a string.

Example:

Input:
str1 = "fodr", str2="gork"
k = 2
Output:
1
Explanation: Can change fd to gk
Your Task:
Since this is a function problem, you don't need to take any input. Just complete the given function areKAnagrams that returns true if the strings can be turned into K-anagrams, else return false.

Constraints:
1 ≤ length of String ≤ 105
1 ≤ K ≤ length of String

*/


function areKAnagrams(str1, str2, k){
    //code here
    
   // step --1 , check lengtn str1 ans str2 is same or not

   if(str1.length !== str2.length) return false

   let map = new Map()  // stored frequency of each character of str1

    for(let i = 0 ; i<str1.length  ;i++) {

       map.set(str1[i] , (map.get(str1[i]) || 0) + 1)
    }

    for(let  j = 0 ; j < str2.length ; j++) {
        
        if(map.has(str2[j])) {  // Str2  contain the charcter or not
            
            map.set(str2[j] , map.get(str2[j]) - 1); // if contain reduce the frequency by 1
             
            if(map.get(str2[j]) == 0){ // check there frequency count is zero remove from map
                
                map.delete(str2[j])
            }
            
        }else{
            k--  // if character not present replace the chacter by str2 , k--

            if(k < 0) {  
                
                return false
            }
        }
    }
    return true
}




function anagram(str1 ,str2) {


    // step --1 , check lengtn str1 ans str2 is same or not

    if(str1.length !== str2.length) return false

    let map = new Map()  // stored frequency of each character of str1

     for(let i = 0 ; i<str1.length  ;i++) {

        map.set(str1[i] , (map.get(str1[i]) || 0) + 1)
     }

     for(let i = 0; i<str2.length ; i++) {

        if(map.has(str2[i])) {

            map.set(str2[i] , map.get(str2[i]) - 1 )

            if(map.get(str2[i]) == 0 ) {
                map.delete(str2[i])
            }
        }
        else{

            k--;

            if(k<0) {
                return false
            }
            
        }
     }
     return true
}






























