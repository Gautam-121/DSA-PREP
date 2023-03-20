function pallindrome(arr){

    let i = 0 ;
    let j = arr.length - 1;
    while(i<j){
        if(arr[i]!=arr[j]){
            return "No"
        }
        i++;
        j--
    }
    return "Yes"
}

console.log(pallindrome([3,6,0,6,3]))