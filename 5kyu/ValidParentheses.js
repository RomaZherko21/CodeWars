function validParentheses(parens){
    let left = 0;
    let right = 0;
    parens = parens.split('');
    
    for(let item of parens){
      item=='(' ? left++ : right++
      if(right>left) return false;
    }
    
    if(left==right) return true;
    return false;
  }