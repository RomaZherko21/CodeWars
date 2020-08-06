function getSum( a,b )
{
  let sum = 0;
  let min = a>b ? b:a;
  let max = a<b ? b:a;
  if(a==b) return a;
   for (let i = min; i<=max; i++){
     sum += i;
   }
  return sum;
}