function removeSub(string , subString){

    for(let  i = 0; i<=(string.length - subString.length) ; i++){
         let k = i;
         let j = 0;
         for(; j<subString.length;j++){
            if(string[k]!=subString[j]){
                break;
            }
            k++
         }
         if(j==subString.length){
            string = string.replace(subString , "")
            i = -1
         }
    }
    console.log(string)
    if(string.length == 0){
        return "yes"
    }else{
        return "No"
    }
}
 
console.log(removeSub("codkd" , "code"))
