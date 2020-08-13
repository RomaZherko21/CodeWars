function spinWords(word) {
  return word
    .split(" ")
    .map((item) => {
      console.log(item);
      if (item.length >= 5) {
        return (item = item.split("").reverse().join(""));
      } else {
        return item;
      }
    })
    .join(" ");
}
