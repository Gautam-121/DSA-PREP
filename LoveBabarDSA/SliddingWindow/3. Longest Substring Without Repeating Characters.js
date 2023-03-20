
function longestSubstringWithoutRepeatingCharacters(s) {


    if (s.length == 0) {
        return 0
    }

    let longestSubStart = 0;
    let longestSubEnd = 0

    let sum = 1

    for (let i = 0; i < s.length; i++) {

        let max = 1

        let obj = {}

        obj[s[i]] = 1

        let j = i + 1

        for (; j < s.length; j++) {

            if (obj[s[j]]) break;

            else {
                obj[s[j]] = 1
                max = max + 1
            }
        }
        console.log(max, obj)

        if (max > sum) {
            sum = max
            longestSubStart = i;
            longestSubEnd = j

        }

    }
    console.log(( (longestSubEnd-1) - longestSubStart ) + 1)
}

// (longestSubstringWithoutRepeatingCharacters("pwwkew"))


var lengthOfLongestSubstring = function(s) {
    
     
    if(s.length == 0 ) {
        return 0
    }
        
    let longestSubStart = 0;
    let longestSubEnd = 0;
    
    let i = 0;
    let j = 0
    
    let window = {}
    
    while(j<s.length) {
        
        if(!window[s[j]]) {
            window[s[j]] = 1
            
            if(j-i+1 > (longestSubEnd - longestSubStart )) {
                longestSubStart = i;
                longestSubEnd = j
            }
            j++
        }
        else {
            
            while(s[i] != s[j]) {
                delete window[s[i]];
                i++
            }
            if(s[i] == s[j]) {
                i++
            }
            
            j++
            
        }
        
    }
    if(longestSubStart == longestSubEnd ) {
        return 1
    }
    
    return ((longestSubEnd - longestSubStart) + 1)
};

// Use This Approch to solve this que

function longestSubstrDistinctChars1(s) {
    //code here
    
    let obj = {}
    
    let i = 0;
    let j = 0;
    let count = 0
    let max = 0
    let ans = 0
    
    while(j<s.length) {
        
        if(obj[s[j]]) {
            obj[s[j]]+=1
        }else{
            obj[s[j]] = 1
            count++
        }
        
        if(count == (j-i+1)) {
            max = Math.max(max , j-i+1)
            ans+=(j-i+1)
            j++
        }
        else if(count < (j-i+1)) {
            
            while(count < (j-i+1)) {
                
                if(obj[s[i]]) {
                    obj[s[i]] --
                    if(obj[s[i]] == 0) {
                        delete obj[s[i]]
                        count--
                    }
                }
                i++
            }
            if(count == (j-i+1)) {
                max = Math.max(max , j-i+1)
                ans+=(j-i+1)
            }
            j++
        }
    }
    return ans
  }


  console.log(longestSubstrDistinctChars1("aabcbcdbca"))