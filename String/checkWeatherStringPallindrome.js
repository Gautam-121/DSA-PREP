function isogramCheck(str){

    let obj = {}

    for(let i= 0; i<str.length ;i++){
        if(obj[str[i]]){
            return "No"
        }else{
            obj[str[i]] = 1
        }
    }
    return "Yes"
}

console.log(isogramCheck("giua"))