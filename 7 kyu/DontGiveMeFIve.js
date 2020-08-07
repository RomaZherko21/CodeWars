function dontGiveMeFive(start, end){
    let count = 0;
    for(let i = start; i<=end; i++){
        if(String(i).indexOf(5)==-1) count++;
    }
  return count;
}