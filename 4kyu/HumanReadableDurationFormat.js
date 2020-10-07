function formatDuration(seconds) {
    // let pad = function(x) { return (x < 10) ? "0"+x : x; }
    let pad = function (x) {
      return x;
    };
    let arr = [];
    console.log(Math.floor((seconds / (60 * 60))))
    arr.push(
      { year: pad(Math.floor((seconds / (60 * 60*24*365)))) },
      { day: pad(Math.floor((seconds / (60 * 60*24)))%365) },
      { hour: pad(Math.floor((seconds / (60 * 60)))%24) },
      { minute: pad(parseInt((seconds / 60) % 60)) },
      { second: pad(seconds % 60) }
    );
    console.log(arr);
    let str = "";
    arr = arr.filter((item) => {
      for (let key in item) {
        if (item[key] > 0) return { key: item[key] };
      }
    });
    arr.forEach((item, id) => {
      for (key in item) {
        if (id < arr.length - 2 && item[key] > 0) {
          item[key] > 1
            ? (str += `${item[key]} ${key}s, `)
            : (str += `${item[key]} ${key}, `);
        } else if (id == arr.length - 2 && item[key] > 0) {
          item[key] > 1
            ? (str += `${item[key]} ${key}s and `)
            : (str += `${item[key]} ${key} and `);
        } else if (id == arr.length - 1 && item[key] > 0) {
          item[key] > 1
            ? (str += `${item[key]} ${key}s`)
            : (str += `${item[key]} ${key}`);
        }
      }
    });
  
    if(str=='') return 'now';
    return str;
  
    //   return ar;
  }
  