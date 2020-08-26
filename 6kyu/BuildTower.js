function towerBuilder(nFloors) {
    let groundFloor = 1 + (nFloors - 1) * 2;
    let arr = [];
    let str = "";
    for (let i = 0; i < nFloors; i++) {
      for (let j = 0; j < groundFloor; j++) {
        if (j < i || j >= groundFloor - i) {
          str += " ";
        } else {
          str += "*";
        }
      }
      arr.push(str);
      str = "";
    }
    return arr.reverse();
  }