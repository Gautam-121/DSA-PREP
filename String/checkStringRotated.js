function checkRotateString(str1 ,str2){
     
    str1 = str1 + str1;

    for(let i = 0 ;i<=(str1.length - str2.length); i++){
        let k = i;
        let j = 0;
        for(;j<str2.length;j++){
            if(str1[k]!=str2[j]){
                break;
            }
            k++
        }
        if(j==str2.length){
            return "Yes"
        }
    }
    return "No"
}

console.log(checkRotateString("ABCD" ,"CAB" ))