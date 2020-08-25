function findEvenIndex(arr) {
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
        sum2 += arr[j];
      }
      if (sum == sum2) return i;
      sum2 = 0;
      sum += arr[i];
    }
    return -1;
  }