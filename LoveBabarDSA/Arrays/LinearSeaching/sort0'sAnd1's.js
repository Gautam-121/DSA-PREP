function sort0and1(arr) {

    for(let i=0 ;i<arr.length ; i++) {
        if(arr[i]==0){
            continue;
        }
        for(let j=i+1; j<arr.length ;j++) {
            if(arr[i]>arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
                break;
            }
        }
    }
   return arr
}

//[0,0,1,1,0,0,0,1,1,0]  == [0,0,0,0,0,1,1,1,1,1]

console.log(sort0and1([1,0,1,1,0,0,0,1,1,0]))


function sort0and1Sec(arr) {

    let i = 0 ;
    let j = arr.length - 1;

    while(i<j){
        if(arr[i]==0 && arr[j]==1) {
            i++;
            j--
        }else if(arr[i] == 0 && arr[j] ==0){
            i++
        }else if(arr[i] == 1 && arr[j] ==1){
            j--
        }else{
            [arr[i] ,arr[j]] = [arr[j],arr[i]];
            i++;
            j--
        }
    }
    return arr
}

console.log(sort0and1Sec([1,0,1,1,0,0,0,1,1,0]))



function sort0and1Third(arr) {

    let i = 0 ;
    let j = arr.length - 1;

    while(i<j){
        
        while(arr[i] == 0 && i<j)
          i++
        while(arr[j] == 1 && i<j)
          j--

        if(i<j) {

           [arr[i],arr[j]] = [arr[j],arr[i]] 
        }
        i++
        j--
    }
    return arr
}

console.log(sort0and1Third([1,0,1,1,0,0,0,1,1,0]))

function reverse(str) {
   
    if(str.length == 0) return ""

    return str[str.length-1] + reverse(str.slice(0 , str.length-1))
}


function reverseSentWord(sente) {

    let word = sente.split(" ")

    let str = ""

    for(let i =0 ; i<word.length ; i++) {

        
        str = str +  " "  + reverse(word[i])
    }

    console.log(str)


   
}

reverseSentWord("my name is gautam")



