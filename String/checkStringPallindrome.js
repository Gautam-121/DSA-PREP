function pallindrome(str){

    let i = 0;
    let j = str.length - 1;

    while(i<j){
        if(str[i]!=str[j]){
            return "No"
        }
        i++;
        j--
    }
    return "Yes"
}

console.log(pallindrome("level"))