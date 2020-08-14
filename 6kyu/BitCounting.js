function countBits(n) {
    let count = 0;
    (+String(n))
      .toString(2)
      .split("")
      .filter((item) => {
        if (item == "1") count++;
      });
    return count;
  }
  
  console.log(countBits(9));
  