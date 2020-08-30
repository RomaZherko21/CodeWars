function bouncingBall(h, bounce, window) {
    if(bounce<=0||bounce>=1||window>=h||h<=0) return -1;
    
    let i = 0;
    while ((h = h * bounce) > window) {
      i += 2;
    }
    return i + 1;
  }