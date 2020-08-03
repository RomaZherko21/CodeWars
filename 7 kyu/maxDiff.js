function maxDiff(list) {
    list.sort((a,b)=>a-b);
    if(list.length == 0) return 0;
    return list[list.length-1]-list[0];
  };