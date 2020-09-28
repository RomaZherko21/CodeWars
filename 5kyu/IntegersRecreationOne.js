function listSquared(m, n) {
    let arr = [];
    for (m; m <= n; m++) {
      let divisors = [];
      for (let i = 1; i <= m; i++) {
        if (m % i == 0) divisors.push(i);
      }
      let sum = divisors.reduce((pre, item) => {
        return (pre += item ** 2);
      }, 0);
      if(Number.isInteger(Math.sqrt(sum))) arr.push([m,sum])
    }
    return arr;
  }
  