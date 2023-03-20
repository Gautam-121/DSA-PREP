/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
 var findRadius = function(houses, heaters) {
    
    heaters.sort((a,b) => a-b)
    
    
    function binarySearch( heater , hp) {
        
        let start  = 0;
        let end    = heaters.length-1;
        
        let mid;
        
        while(start<=end) {
            
            mid = Math.floor(start + (end - start )/2)
            
            if(heater[mid] == hp) {
                return 0
            }
            else if(heater[mid] > hp) {
                
                end  = mid - 1
            }
            else if(heater[mid] < hp) {
                
                start = mid + 1
            } 
        }
        
        
        if(end == -1) {
            
             return Math.abs(Math.abs(hp-heaters[start]))
        }

        if(start > heater.length-1) {
            
            return Math.abs(Math.abs(hp-heaters[start]))
       }
                             
        
     let minOfCeilFloor = Math.min(Math.abs(hp-heaters[start]) , Math.abs(hp-heaters[end]))
        
        return minOfCeilFloor
    }
    
    let maxOfMin = -1
    
    for(let  i =0 ; i<houses.length ; i++) {
        
        let hp = houses[i];
        
        let minDist = binarySearch(heaters , hp)
        
        maxOfMin = Math.max(minDist , maxOfMin)
    }
    
    return maxOfMin
};


let minOfCeilFloor = Math.min((jl - hp) ,(hp-js))
