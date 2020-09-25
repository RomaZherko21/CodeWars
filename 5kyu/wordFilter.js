function Dictionary(words) {
    this.words = words;
  }
  
  Dictionary.prototype.getMatchingWords = function(pattern) {
  pattern =  pattern.replace(/\?/g, '[a-z]')
let arr = [];
  for(let item of this.words){
      let regexp = new RegExp(`^${pattern}$`, "gi");
      if(regexp.test(item)) arr.push(item);
  }
  return arr;
  }