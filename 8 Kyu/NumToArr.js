function digitize(n) {
    return String(n).split('').reverse().map(item=>Number(item));
  }