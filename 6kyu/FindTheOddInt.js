function findOdd(arr) {
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        if (!(i % 2 !== 0)) {
          return arr[i];
        }
      }
    }
  }