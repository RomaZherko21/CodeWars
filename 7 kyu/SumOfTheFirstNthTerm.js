function SeriesSum(n){
    let sum=0;
    if(n) sum = 1;
   for(let i = 1; i<n; i++){
     sum += 1/((i*3)+1);
   }
    return sum.toFixed(2);
  }