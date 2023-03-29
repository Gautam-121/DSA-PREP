
// Count total subString Without Repeatating character , first go and check longest subString without repeatating 
// character

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





















 