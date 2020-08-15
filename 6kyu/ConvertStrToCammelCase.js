function toCamelCase(str) {
    return str.split("").map((item, index, arr) => {
       if (item == "-" || item == "_") {
          arr[index + 1] = (arr[index + 1]).toUpperCase();
       }else{
           return item;
       }
     }).filter(item=>item!==undefined).join('');
   
   }
   