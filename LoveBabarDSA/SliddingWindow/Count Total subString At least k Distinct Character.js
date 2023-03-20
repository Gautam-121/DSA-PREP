// count total number of subString contain at least k distinct character , first solve longest subString of at 
// least k sidtinct character

function countTotalSubstringAtleastKdistinctChar(s , k) {

    let i =0 ;
    let j = 0;
    let map = new Map()
    let ans = 0;

    while(j<arr.length) {

        if(map.has(s[j])) {
            map[s[j]]++
        }else{
            map.set(s[i] , 1)
        }

        if(map.size() < k) {
            j++
        }
        else if (map.size() >=k) {

            ans+=(j-i+1)

            j++
        }
    }
    return ans
}