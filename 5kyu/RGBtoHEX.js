function rgb(...arg) {
    let str = "";
    for (let item of arg) {
      if (item <= 0) {
        str += "00";
      } else if (item > 255) {
        str += "FF";
      } else {
          item.toString(16).length<2 ?  str =str+'0'+item.toString(16):str += item.toString(16);
      }
    }
    return str.toUpperCase();
  }
  