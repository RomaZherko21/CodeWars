function order(str) {
    if(str=='') return ''
  let arr = [];
  str = str.split(" ");
  let i = 1;
  while (i <= str.length) {
      for (let item of str) {
      item.split('').forEach((char) => {
        if (char == i) {
          arr.push(item);
          i++;
        }
      });
    }
    
  }
  return arr.join(' ');
}