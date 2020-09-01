function count(string) {
    let obj = {};
    string = string.split("");
    for (let item of string) {
      if (obj[item]) {
        obj[item] += 1;
      } else {
        obj[item] = 1;
      }
    }
    return obj;
  }