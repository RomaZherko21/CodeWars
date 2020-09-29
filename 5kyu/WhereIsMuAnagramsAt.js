function anagrams(word, words) {
    let sum = 0;
    let arr = [];
    for (let item of word) {
      sum += item.charCodeAt();
    }
    for (let item of words) {
        let sum2 = 0;
      for (let char of item) {
          sum2 += char.charCodeAt();
        }
  if(sum2==sum) arr.push(item)
    }
    return arr;
  }