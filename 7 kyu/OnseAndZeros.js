const binaryArrayToNumber = arr => {
    let sum = 0;
    arr.reverse().forEach((item, index)=>{
      if(item==1){
        sum += 2**index
      }
    })
    return sum;
  };