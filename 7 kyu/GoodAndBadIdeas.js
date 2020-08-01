function well(x){
    let count = 0;
      for (let item of x){
      for(let idea of item){
        if(String(idea).toLowerCase()=="good") count++;
      }
      }
      if(count==2 || count ==1){
        return 'Publish!'
      }else if(count<1){
        return 'Fail!'
      }else{
        return 'I smell a series!'
      }
    }