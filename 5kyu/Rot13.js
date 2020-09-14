//есть вероятность ослепнуть при чтении этого дер**а

function rot13(message){
    let firstSegmentUpper = ["A",'B','C','D','E','F','G','H','I','J','K','L','M'];
    let secondSegmentUpper = ["N",'O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
    let str = [];
  message.split('').forEach((item)=>{
    console.log(firstSegmentUpper.join(''))
    if(firstSegmentUpper.findIndex((x)=>x==item)!==-1){ str.push(secondSegmentUpper[firstSegmentUpper.findIndex((x)=>x==item)])}
   else if(secondSegmentUpper.findIndex((x)=>x==item)!==-1) {str.push(firstSegmentUpper[secondSegmentUpper.findIndex((x)=>x==item)])}
    else if(firstSegmentUpper.join('').toLowerCase().split('').findIndex((x)=>x==item)!==-1) {str.push(secondSegmentUpper.join('').toLowerCase().split('')[firstSegmentUpper.join('').toLowerCase().split('').findIndex((x)=>x==item)])}
    else if(secondSegmentUpper.join('').toLowerCase().split('').findIndex((x)=>x==item)!==-1){ str.push(firstSegmentUpper.join('').toLowerCase().split('')[secondSegmentUpper.join('').toLowerCase().split('').findIndex((x)=>x==item)])}
    else{
  str.push(item);
    }
  })
  return str.join('');
  }