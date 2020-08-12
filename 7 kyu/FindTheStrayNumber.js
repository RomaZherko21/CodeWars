function stray(numbers) {
  numbers = numbers.sort((a,b)=>a-b);
  if(numbers[0]==numbers[1]){ return numbers[numbers.length-1]}
  else{
    return numbers[0];
  }
}