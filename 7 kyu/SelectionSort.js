function SelectionSort(arr) {
    let a;
    for (let j = 0; j < arr.length; j++) {
        let min = arr[j]
      for (let i = j+1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            arr[i] = arr[j];
            arr[j]=min;
        }
      }
    }
    return arr;
  }
  