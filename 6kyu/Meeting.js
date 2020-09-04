function meeting(str) {
    let guests = [];
    str.split(";").forEach((item) => {
      item = item.split(":");
      guests.push({[item[1]]:item[0]});
    });
    let arr = [];
    for (let item of guests) {
      console.log(Object.values(item))
      let str = `(${Object.keys(item)[0]}, ${Object.values(item)[0]})`;
      arr.push(str.toUpperCase());
    }
    return arr.sort().join('');
  }