var maxSequence = function(arr){
    let currentVal = 0;
    let highestVal = 0
    for(let val of arr){
      currentVal += val;
      if(currentVal < 0) currentVal = 0;
      else if(currentVal > highestVal) highestVal = currentVal
    }
    return highestVal
  }

