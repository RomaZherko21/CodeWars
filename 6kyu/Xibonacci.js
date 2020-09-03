function Xbonacci(signature, n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      if (i < signature.length) {
        arr.push(signature[i]);
      } else {
        let sum = 0;
        for (let j = i - signature.length; j < i; j++) {
          sum += arr[j];
        }
        arr.push(sum);
      }
    }
    return arr;
  }