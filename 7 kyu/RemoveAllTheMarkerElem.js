Array.prototype.remove_ = function(integer_list, values_list){
    let arr =[];
    for(let item of integer_list){
      if(!values_list.includes(item)) arr.push(item); 
    }
    return arr;
  }