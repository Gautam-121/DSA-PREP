/* reverse a sentence in certain manner -->
e.g --> "Concert game winner" output is --> "trecnoC emag renniw" --> ["concert" , "game" , "winner"] ---> arr[i]  = reverse(arr[i]) ["trecnoC", "emag" , "renniw"]

function reverse(str){

    if(str.length == 0){
        return ""
    }

    return str[st] + reverse(str.slice(0 , str.length-1))
}

function reverse(str){

    let newStr = ""

    for(let i = str.length-1 ; i>=0 ; i--){
        newStr+=str[i]
    }
    return newStr
}

function reverseWord(str){
    
    str = str.split(" ")

    for(let i = 0 ; i<str.length ; i++){

        arr[i] = reverse(arr[i])
    }

    return str.join(" ")
}

step1 --> Split Word where from space --> str.split(" ") ----> ["Concert" , "game" , "winner"] 

step2---> reverse Each word And Upadate the key ---> ["trecnoC" , "emag" , "renniw" ]

step3---> array.join(" ") "trecnoC emag renniw"

*/

function reverse(str) {

    if(str.length == 0) return ""
    else return reverse(str.slice(1)) +  str[0]
}

function reverseWordSen(sent) {

    let split = sent.split(" ")

    for(let  i = 0 ; i<split.length; i++) {

        split[i] = reverse(split[i])
    }

    return (split.join(" "))
}

console.log(reverseWordSen("Concert game winner"))


function word(word) 
{

    let ans = ""
    let w = ""

    for(let i = 0 ; i<word.length ; i++)
    {
        

        if(word[i] == " ")
        {
             w = reverse(w)
             ans+=w
             w = ""
        }
        else
        {
            w+=word[i]

        }
    }

    if(w.length!=0)
    {
        w = reverse(w)
        ans+=w
    }

    return ans
}


