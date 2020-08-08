function splitTheBill(x) {
    arr = Object.entries(x);
    arrValue = Object.values(x);
  
    let sum = 0;
    for (let value of arrValue) {
      sum += value;
    }
    let debt = (sum / arrValue.length);
    console.log(debt)
  
  
    for (let value of arr) {
      if (value[1] >= 0) {
        value[1] = Number((value[1] - debt).toFixed(2));
      } else {
        value[1] = Number((value[1] + debt).toFixed(2));
      }
    }
  
    let obj = {};
    arr.forEach((item) => {
      obj[item[0]] = item[1];
    });
  
    return obj;
  }