function autocorrect(input){
    let regexp = /\byou\b|\byou+\b|\bu\b/gi;
    return input.replace(regexp, 'your sister')
  }
  