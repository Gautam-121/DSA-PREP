/*

Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

Example 1:

Input:
S = iam.like.this.program.very.much

function reverse(str){

    if(str.length == 0) return ""
    
    return str[str.length-1] + reverse(str.slice(0 , str.length-1))
}

function reverseStr(str){

    let ans = ""
    let word = ""

    for(let i = str.length-1 ; i>=0 ; i--)
    {
        if(str[i] == ".")
        {
           word =  reverse(word)
           ans+=word
           ans+="."
           word = ""
        }
        else
        {
            word+=str[i]
        }
    }

    if(word.length!=0)
    {
        word = reverse(word)
        ans+=word
    }

    return ans
}

Output: much.very.program.this.like.i
Explanation: After reversing the whole
string(not individual words), the input
string becomes
much.very.program.this.like.i
Example 2:

Input:
S = pqr.mno
Output: mno.pqr
Explanation: After reversing the whole
string , the input string becomes
mno.pqr

Your Task:
You dont need to read input or print anything. Complete the function reverseWords() which takes string S as input parameter and returns a string containing the words in reversed order. Each word in the returning string should also be separated by '.' 


Expected Time Complexity: O(|S|)
Expected Auxiliary Space: O(|S|)


*/

function reverseWords(s) {
    // code here

    function reverseWord(w) {

        let str = ""

        for (let i = w.length - 1; i >= 0; i--) {
            str += w[i]
        }

        return str
    }

    let w = ""
    let ans = ""

    for (let i = s.length - 1; i >= 0; i--) {

        if (s[i] == ".") {

            w = reverseWord(w)
            ans += w
            ans += "."
            w = ""
        }
        else {
            w += s[i]
        }
    }
    if (w != "") {
        w = reverseWord(w)
        ans += w
    }

    return ans
}