function checkSuffixEnd(s1,s2){

    let i = s2.length - s1.length;
    let j = 0;
    while(i<s2.length && j<s1.length){
        if(s2[i]!=s1[j]){
            return "No"
        }
        i++;
        j++
    }
    if(j == s1.length){
        return "Yes"
    }
}

console.log(checkSuffixEnd("code","coderscod"))