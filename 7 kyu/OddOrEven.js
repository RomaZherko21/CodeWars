function oddOrEven(array) {
    let sum = 0;
     array.forEach(item=>sum+=item);
    return sum%2==0 ? 'even' : 'odd';
  }