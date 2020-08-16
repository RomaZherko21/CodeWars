function sortArray(array) {
  let oddArr = [];
  array.forEach((item, index) => {
    if (item % 2 !== 0) {
      oddArr.push(item);
      array[index] = null;
    }
  });
  oddArr.sort((a, b) => b - a);
  return array.map((item) => {
    if (item == null) {
      return oddArr.pop();
    } else {
      return item;
    }
  });
}
