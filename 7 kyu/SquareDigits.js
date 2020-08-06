function squareDigits(num){
    return Number(String(num).split('').map(item=>item**2).join(''));
  }