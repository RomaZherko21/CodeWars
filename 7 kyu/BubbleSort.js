function BubbleSort(arr) {
    let a;
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          a = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = a;
        }
      }
    }
    return arr;
  }
  