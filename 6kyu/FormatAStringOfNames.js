function list(names) {
    let str = "";
    if (names.length == 1) return names[0].name;
    if (names.length == 0) return "";
    if (names.length == 2) return names[0].name + " & " + names[1].name;
    names.forEach((item, id) => {
      if (id == names.length - 2) {
        str += item.name + " & ";
      } else {
  
        id==names.length-1 ? str += item.name :str += item.name + ", ";
      }
    });
    return str;
  }