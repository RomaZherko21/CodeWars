function findNextSquare(sq) {
  
    let num = Math.sqrt(sq);
    if ((num ^ 0) === num) {
      return (num + 1)**2;
    } else {
      return -1;
    }
  }