function solution(arr) {
    //Write your solution here
      let obj = {}
      for(let i=0;i<arr.length;i++){
          if(obj[arr[i]]){
              continue;
          }else{
              obj[arr[i]] = 1
          }
      }
      return Object.keys(obj).join("")
  }

  console.log(solution("hello brother dear my friends"))