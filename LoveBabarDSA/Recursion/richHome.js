function richHome(src , dest)
{
    console.log("src -->" , src , "destination -->" , dest )
    // base case 
    if(src == dest)
    {
        console.log("phuch gya")
        return
    }

    // recursive relation
    src++
    richHome( src, dest)
}


richHome(1 , 10) 



function rich(str , dis)
{
    console.log( "start -->" , str , "destnation" , dis)
    if( str == dis)
    {
        console.log("phush gye hum")
        return
    }

    str++

    rich( str , dis)


}

rich(1 , 10)