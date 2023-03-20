// write a program to print the marks of the student in an object using for loop

let obj = 
{
    harry : 98,
    rohan : 70,
    gautam : 99
}

// using for loop

for( let i = 0 ; i<Object.keys(obj).length ; i++) 
{
    console.log("The marks of" , Object.keys(obj)[i]  , "--> is" , obj[Object.keys(obj)[i]])
}


// using For in loop
for(let key in obj)
{
    console.log("The marks of" , key , "--> is" , obj[key])
}


let num = prompt("Enther The Number")
num = (+num) // convert string to the number

let n = 12
if(num == n )
{
    alert("congratulation you won")
}
else if (num > n)
{
    console.log("Number is less than" , num)
}
else
{
    console.log("Number is greter than", num)
}



const mean = (a,b,c,d,e) => {
    
    return (a+b+c+d+e)/5
}

console.log(mean(2,4,9,0,1))