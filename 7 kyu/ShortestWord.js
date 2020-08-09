function findShort(s){
    return s.split(' ').map(item=>item.length).sort((a,b)=>a-b)[0];
   }