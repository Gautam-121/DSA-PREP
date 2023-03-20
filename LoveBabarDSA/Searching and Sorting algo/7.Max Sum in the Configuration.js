// calculate maximum sum configration

function max_sum(arr, n)
    {
        //your code here
        
        let sum = 0;
        let S0  = 0;
        
        for(let  i =0 ; i<arr.length ; i++) {
            
            sum+=arr[i]
            S0+=arr[i]*i
        }
        
        let max = S0
        let Si  = S0
        
        for(let i=0 ; i<n-1 ;i++) {
            
            let Sip1 = Si + sum - (n*arr[n-1-i])
             
            if(Sip1 > max) {
                max = Sip1
            }
            
            Si = Sip1
        }
        
        return max
    }