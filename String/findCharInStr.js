function findChar(str,target) {

    if(str.length == 0 && target.length == 0) {
        return false
    }

    target = target.toLowerCase()

    for(let i=0 ;i<str.length;i++) {
        if(str[i].toLowerCase() == target) {
              return true
        }
    }
    return false
}

console.log(findChar("javasCript" , "c"))