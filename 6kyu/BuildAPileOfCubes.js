function findNb(m) {
    let i = 0;
    let sum = 0;
    while (sum < m) {
      sum += i ** 3;
      i++;
    }
    if(sum==m) return i-1;
    return -1;
  }