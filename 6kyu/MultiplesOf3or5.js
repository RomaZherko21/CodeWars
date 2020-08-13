function solution(number){
    let sum = 0;
    for (let i = 1; i<number;i++){
      if(Number.isInteger(i/3)||Number.isInteger(i/5)) sum+=i;
    }
    return sum;
  }