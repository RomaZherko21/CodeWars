function digPow(n, p) {
    let sum = 0;
    (String(n)).split("").forEach((item) => {
      sum += item ** p++;
    });
    if (Number.isInteger(sum/n)){
      return sum/n;
    }else{
      return -1;
    }
  }