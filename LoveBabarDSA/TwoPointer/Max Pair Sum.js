/*

Given an array of distinct integers A, find the largest sum of any pair of elements. 

 

Input 
    6 
    1 2 3 89 4 10 

 

    Where, 

First line contains the size of array N. 
Second line contains array elements.      
 

Output 
    99 

 

Here for the given array, sum of various pairs are 
    1 + 89 = 90 
    2 + 89 = 91 
    3 + 89 = 92 

    4 + 89 = 93
    10 + 89 = 99 


and so on. The largest sum out of these pairs is 99. 

*/

function maxPairSum(arr) {

    let j= arr.length-1,i=0
    let max=-Infinity
 while(i<j){
    if((arr[i]+arr[j])>max)
        max = arr[i]+arr[j]
    if(arr[i]<arr[j]){
         i++
     }else{
         j--
     }
 }
  return max  
}

console.log(maxPairSum([1007483620,1007483621,1007483622,1007483623,1007483624,1007483625,1007483626,1007483627,1007483628,1007483629,1007483630,1007483631,1007483632,1007483633,1007483634,1007483635,1007483636,1007483637,1007483638]))


function sort(arr,k) {

    for(let i=0 ; i<k ; i++) {

        let swapped = false
    
        for(let j=0 ;j<arr.length-1 ;j++) {
            
            if(arr[j] > arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
    
                swapped = true
            }
        }
        if(swapped == false) {
            break
        }
    
    
    }

    return arr[arr.length - k]

}


console.log(sort([1,7,6,10,14,9],4))


let a;

a = 5 ;

console.log(a)

let str = ""

for(let key in obj) {

    str = str + key + " " + obj[key] + "\n"
}

return str

