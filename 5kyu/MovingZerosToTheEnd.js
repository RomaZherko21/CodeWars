let moveZeros = function (arr) {
    let zeros = [];
    let newArr = [];
    for(let item of arr){
      if(item===0){
        zeros.push(item);
      }else{
        newArr.push(item);
      }
    }
    return [...newArr, ...zeros]
  }