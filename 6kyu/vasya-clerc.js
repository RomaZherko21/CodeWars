function tickets(peopleInLine){
    let [c25,c50,c100] = [0,0,0];
    for(let v of peopleInLine) {
      if(v===25) c25++;
      if(v===50) {c50++; c25--;}
      if(v===100) {c25--; c50>0?c50--:c25-=2;}
      if(c25<0||c50<0) return 'NO'
    }
    return 'YES'
  }