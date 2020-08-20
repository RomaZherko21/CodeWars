function wave(str) {
  let arr = [];
  let addit = [];
  for (let i = 0; i < str.length; i++) {
    addit = str.split("");
    if (addit[i] == " ") continue;
    addit[i] = addit[i].toUpperCase();
    arr.push(addit.join(""));
  }
  return arr;
}
