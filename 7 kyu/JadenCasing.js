String.prototype.toJadenCase = function () {
    console.log(String(this).split(' ').map((item)=>item[0].toUpperCase()+item.slice(1)).join(' '))
  };