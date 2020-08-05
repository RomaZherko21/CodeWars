function maskify(string) {
    end = string.slice(-4);
    let str = [];
    for (let i = 0; i < string.length - 4; i++) {
      str.push("#");
    }
    return str.join('')+end;
  }