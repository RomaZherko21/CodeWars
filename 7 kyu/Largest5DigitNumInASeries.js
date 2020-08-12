function solution(digits){
    let max = 0;
    digits = String(digits) 
  for(let i = 0; i<digits.length;i++){
    let num = +digits.split('').splice(i,5).join('');
    if(max< num) max = num;
  }
  return max;
}
