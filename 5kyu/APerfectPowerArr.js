function isPP(num) {
    let arr = [];
  
    if (Number.isInteger(Math.cbrt(num))) {
      arr.push([Math.cbrt(num), 3]);
    }
    for (let i = 2; i <= num; i++) {
      if (Math.pow(num, 1 / i) < 2) break;
      if (Number.isInteger(Math.pow(num, 1 / i))) {
        arr.push([Math.pow(num, 1 / i), i]);
      }
    }
    if (arr.length == 0) return null;
    if (arr.length == 1) arr = arr[0];
    return arr;
  }
  