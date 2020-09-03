let encryptThis = function (text) {
    return text.split(" ").map((item, id) => {
      let str = "";
      for (let i = 0; i < item.length; i++) {
        if (i == 0) {
          str += item[i].charCodeAt();
        } else if (i == 1) {
          str += item[item.length - 1];
        } else if (i == item.length - 1) {
          str += item[1];
        } else {
          str += item[i];
        }
      }
      return str;
    }).join(' ');
  };