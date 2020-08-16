function encrypt(text, n) {
    let arr = [];
    if(n==0) return text;
    while (n > 0) {
        console.log(text)
      for (let i = 1; i < text.length; i = i + 2) {
        if (text[i]) arr.push(text[i]);
      }
      for (let i = 0; i < text.length; i = i + 2) {
        if (text[i]) arr.push(text[i]);
      }
      n--;
      text = arr.join('')
      arr = [];
    }
    return text;
  }
  
  