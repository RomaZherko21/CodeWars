function autocomplete(input, dictionary){
    input = input.match(/[a-z]/gi).join('');
    let regexp = new RegExp(`^${input}.*`, 'i');
     dictionary = dictionary.filter(item=>{
      if(regexp.test(item)) return true;
    })
    if(dictionary.length>5) dictionary.length = 5;
    return dictionary;
  }