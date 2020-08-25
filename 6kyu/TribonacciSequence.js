function tribonacci(signature, n) {
    let sum;
    for (let i = 2; i < n-1; i++) {
      sum = signature[i - 2] + signature[i - 1] + signature[i];
      signature.push(sum);
    }
    return signature;
  }