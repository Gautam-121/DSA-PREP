function computeLPSArray(pat , m , lps){

    let len = 0;
    let i = 1;
    lps[0] = 0;

    while(i<m){

        if(pat[i] == pat[len])
        {
            lps[i] = len + 1;
            len++
            i++
        }
        else
        {
            if(len!=0)
            {
                len = lps[len-1]
            }
            else
            {
                lps[i] = 0
                i++
            }
        }
    }
}
var strStr = function(haystack, needle) {

    if(haystack == needle) return 0

    let N = haystack.length
    let M = needle.length
    let lps = new Array(M).fill(0)

    computeLPSArray(needle , M , lps)

    let i = 0;
    let j = 0;
    let ans = []

    while(i<N-M+1){

        if(haystack[i] == needle[j])
        {
            i++
            j++
        }
        else
        {
            if(j!=0)
            {
                j = lps[j-1]
            }
            else
            {
                i++
            }
        }

        if(j == M)
        {
            // return (i-j)
            ans.push(j-i)
            j = lps[j-1]
        }
    }

    // return -1
    return ans
};




function computeLPSArray(lps , M , pat){

    let len = 0;
    let i = 1;
    lps[0] = 0

    while(i<M){

        if(pat[i] == pat[len]){
            lps[i] = len + 1
            len++
            i++
        }
        else
        {
            if(len!=0){
                len = lps[len-1]
            }
            else
            {
                lps[i] = 0
                i++
            }
        }
    }
}









function patterMatching(text  , pat){

    let N = text.length
    let M = pat.length

    let lps = new Array(M).fill(0)
    computeLPSArray(lps , M , pat)

    let ans = []
    let i = 0;
    let j = 0;

    while(i<N-M+1){

        if(text[i] == pat[j]){
            i++
            j++
        }
        else
        {
            if(j!=0){
                j = lps[j-1]
            }
            else
            {
                i = i + 1
            }
        }

        if(j == M){
            ans.push(j-i)
            j =  lps[j-1]
        }
    }
    return ans
}