function divisibleByThree(str) {
    let sum = 0;
    for (let item of str.split("")) {
      sum += +item;
    }
    return sum % 3 == 0 ? true : false;
  }