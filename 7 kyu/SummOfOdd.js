function rowSumOddNumbers(n) {
    let all = ((n+1) / 2) * n;
    console.log(all)
    let first = 1+((all-n)*2);
    let second = 1+((all-1)*2);
    return (first+second)*(n/2);
  }