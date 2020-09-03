Object.prototype.hash = function(string) {
    let arr = string.split('.');
    for(let prop of arr){
        obj = obj[prop];
        if(obj == undefined) return undefined;
    }
  return obj;
}