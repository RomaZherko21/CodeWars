function getCount(str) {
    let vowelsCount = 0;
    
    str.split('').forEach(item=>{
      if(item=='a'||item=='e'||item=='i'||item=='o'||item=='u') vowelsCount++;
    })
    
    
    return vowelsCount;
  }