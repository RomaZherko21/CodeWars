function high(x) {
    x = x.split(" ");
    let main = "";
    x.reduce((prev, item) => {
      let sum = 0;
      for (let char of item) {
        sum += char.charCodeAt(0)-96;
      }
      console.log(prev, main)
      if (sum > prev) {
          main = item;
        return sum;
      } else {
        return prev;
      }
    }, 0);
    return main;
  }