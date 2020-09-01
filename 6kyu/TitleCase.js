function titleCase(title, minorWords='') {
    if(title=='') return ''
      return title.toLowerCase().split(' ').map((item,id)=>{
          if(id==0) return item[0].toUpperCase()+item.slice(1, item.length);
          if(minorWords.toLowerCase().split(' ').indexOf(item)==-1|| !minorWords) return  item[0].toUpperCase()+item.slice(1, item.length);
          return item;
      }).join(' ');
    }