function pigIt(str){
  
    return str.split(' ').map((item)=>{
      if(item!=='!' && item!=='?' && item!=='.'){
        return item.slice(1)+item[0]+'ay'
      }else{
        return item;
      }
    }).join(' ');
  }