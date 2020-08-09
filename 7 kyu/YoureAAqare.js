var isSquare = function(n){
    if(n<0) return false;
    return Number.isInteger(Math.sqrt(n)) ? true: false;
    
  }