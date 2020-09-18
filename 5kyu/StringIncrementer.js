function incrementString(str) {
    let num = "";
    let word = "";
    str.split("").forEach((item) => {
      if (+item >= 0) {
        num += item;
      } else {
        word += item;
      }
    });
   
  let l = num.length;
  num++;
  while(String(num).length<l){
    num = '0'+String(num);
  }
    return word+num
  }