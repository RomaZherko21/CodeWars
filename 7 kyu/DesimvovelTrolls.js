function disemvowel(str) {
    let arr = [];
    str.split("").forEach((item) => {
      let x = item.toLowerCase();
      if (
        x !== "a" &&
        x !== "e" &&
        x !== "i" &&
        x !== "o" &&
        x !== "u"
      )
        arr.push(item);
    });
  
    return arr.join('');
  }
  