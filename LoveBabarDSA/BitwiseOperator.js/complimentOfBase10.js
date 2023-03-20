function complimentOfBase10(n){
    
    let m = n;
    let mask = 0;
    while(m!=0){
        mask = (mask << 1) | 1 // 0000000000000000000 | 1 == 00000000000000010 | 1 == 000000000000011 == 0000000000110 | 1 == 000000000000111
        m = m >> 1
    }
    return (~n & mask)
}

console.log(complimentOfBase10(5))

