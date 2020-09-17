function productFib(prod) {
    let arr = [0, 1];
    do {
      if (arr[arr.length - 2] * arr[arr.length - 1] == prod) {
        return [arr[arr.length - 2], arr[arr.length - 1], true];
      } else if (arr[arr.length - 2] * arr[arr.length - 1] > prod) {
        return [arr[arr.length - 2], arr[arr.length - 1], false];
      }
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    } while (arr[arr.length - 1] < prod);
  }