// Gautam - Given a string s1 and a string s2, write a function to check whether s2 is a rotation of s1. 

import { func } from "prop-types";

// Examples: 

// Input: S1 = ABCD, S2 = CDAB ,  , ABCDACDAB
// Output: Strings are rotations of each other
 

// Input: S1 = ABCD, S2 = ACBD , ACBDABCD
// Output: Strings are not rotations of each other

// DACB , BDAC , CBDA , ABCD

function checkRotation(str1 , str2)
{
    if(str1.length != str2.length) 
    {
        console.log("strings are not rotation of each other")
        return
    }

    str1 = str1 + str1; // ABCDABCD

    let i = 0; 
    let j = 0

    while(i<str1.length)
    { 
        if(str1[i] == str2[j])
        {
            i++
            j++

            if(j == str2.length) 
            {
                console.log("strings are rotation of each other")
                return
            }
        }
        else
        {
            j = 0;
            if(str1[i] == str2[j])
            {
                j++
            }
            i++
        }
    }
 console.log("strings are not rotation of each other")
}

checkRotation("ABCD" , "ACBD" )









