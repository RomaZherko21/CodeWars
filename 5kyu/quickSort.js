function quickSort(arr) {
    if (arr.length < 2) {
      return arr;
    } else {
      let pivot = arr[Math.floor(arr.length / 2)];
      let less = [];
      let greater = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot && i !== Math.floor(arr.length / 2))
          less.push(arr[i]);
      }
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > pivot && i !== Math.floor(arr.length / 2))
          greater.push(arr[i]);
      }
  
      return [...quickSort(less), pivot, ...quickSort(greater)];
    }
  }