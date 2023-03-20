// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

var isAnagram = function(s, t) {
    
    let obj  = {}
    
    for(let i =0 ;i<s.length ; i++) {
        
        if(obj[s[i]]) {
            obj[s[i]]+=1
        }else{
            obj[s[i]] = 1
        }
    }
    
    for(let j = 0 ;j<t.length; j++) {
        
        if(obj[t[j]]) {
            obj[t[j]]-=1
            if(obj[t[j]] == 0) {
                delete obj[t[j]]
            }
        }else{
            return false
        }
    }
    
    if(Object.keys(obj).length == 0) {
        return true
    }else{
        return false
    }
    
};
