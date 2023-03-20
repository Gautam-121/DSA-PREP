
// function indexOfSubString(string , subString){

//     let subStringLength = subString.length

//     for(let i =0; i<= (string.length - subStringLength) ; i++){
//         let k = i ;
//         let j = 0;
//         for(;j<subStringLength;j++){
//             if(string[k]!=subString[j]){
//                 break;
//             }
//             k++
//         }
//         if(j==subStringLength){
//             return i
//         }
//     }
//     return -1
// }

// function indexOfSubString(string , subString){

//     let i = 0;
//     let j = 0;

//     while(i<string.length && j<subString.length){
//         if(string[i]==subString[j]){
//             i++;
//             j++
//         }else{
//             i++;
//             j=0
//         }
//     }
//     if(j == subString.length){
//         return "Yes"
//     }else{
//         return "No"
//     }
// }

function indexOfSubString(string , subString){

    let subLength = subString.length;

    for(let i=0 ;i<=(string.length - subString.length);i++){
        let k = i;
        let j = 0;
        for(;j<subLength;j++){
            if(string[k]!=subString[j]){
                break;
            }
            k++
        }
        if(j==subLength){
            return i
        }
    }
    return -1
}


let index = indexOfSubString("Code Zinger University","Zinger")

console.log("Index of substring in main string is" , index)

let str = ("asdfghjkqweryuixcvbnmdfghjrtyuvnmdfgrtydfgncv fgghertyhdfgnfvbcvbsdfgerg").length

console.log(str)



