function sumDigPow(a, b) {
    let arr = [];
    for(let i = a; i<=b;i++){
      if (String(i).split('').reduce((prev, item,id)=>{
        return prev+=item**(id+1);
      },0)==i) arr.push(i);
    }
    return arr;
  }