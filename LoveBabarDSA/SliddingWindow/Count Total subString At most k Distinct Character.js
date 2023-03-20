// count total subString contain at most k distinct character  , First solve Longest subString contain At most k distinc character


function countTotalSubstringAtMostKdistinctChar(arr , k) {

    let i =0;
    let j =0;
    let map = new Map()
    let ans = 0

    while(j<arr.length) {

        if(map.has(arr[j])) {
            map.set(arr[j] , map.get(arr[j]) + 1)
        }else{
            map.set(arr[j] , 1) 
        }

        console.log(map.size , map , ans)

        if(map.size <= k) {    // "aabbcabc"
           
            ans+= j-i+1
            j++
        }
        else if(map.size > k) {

            while(map.size > k) {
                
                if(map.has(arr[i])) {
                    map.set(arr[i] , map.get(arr[i]) - 1)


                    if(map.get(arr[i]) == 0) {
                        
                        map.delete(arr[i])
                    }
                }
                i++
            }
            if(map.size <= k) {

                ans+=(j-i+1)
            }
            j++
        }
    }
    return ans
}


console.log(countTotalSubstringAtMostKdistinctChar("aabbcabc" , 2))