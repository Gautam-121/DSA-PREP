// To calculate number of subString with exactlt k distinct character is equal to 

//  calsulate total number of subString at most k distict character - calculate total number of substring at most (k-1) distinct char


function totalSubStringWithExatclyKdistinctChar(arr , k) {


    let i = 0;
    let j = 0;
    let map = new Map()
    let ans = 0

    while(j<arr.length) {

        if(map[s[j]]) {
            map[s[i]]++
        }else{
            map[s[i]] = 1
        }
        
        if(map.size() <= k) {
           
            ans+=(j-i+1);
            j++
        }
        else {

            while(map.size() > k) {

                if(map[s[i]]) {
                    map[s[i]]--
                    if(map[s[i]] == 0) {
                        map.delete(s[i])
                    }
                }
                i++
            }
            if(map.size() <= k) {
                
                ans+=(j-i+1)
            }
            j++
        }

    }
}

function totalValue(arr , k) {

    if(k==1) {

        let i = 0;
        let j = 0;
        let map = new Map()

        while(j<arr.length) {

            if(map.has(s[j])) {

                map[s[j]]++
            }
            else{
                map.set(s[j] , 1)
            }

            if(map.size() < k) {
                j++
            }
            else if(map.size == k) {

                ans+=(j-i+1);

                j++
            }
            else {

                while(map.size() > k) {

                    if(map.has(s[i])) {
                        map[s[i]]--

                        if(map[s[i]] == 0) {
                            map.delete(s[i])
                        }
                    }
                    i++
                }
                if(map.size == k) {
                    
                    ans+= (j-i+1) ;
                }
                j++
            }
        }
    }
    
    let total = totalSubStringWithExatclyKdistinctChar(arr , k) - totalSubStringWithExatclyKdistinctChar(arr , k-1)

    return total
}

