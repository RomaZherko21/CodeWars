function validate(password) {
    if(password.toUpperCase()==password || password.toLowerCase()==password || password.search(/[0-9]/)==-1) return false
    return /^[a-z0-9]{6,}$/gi.test(password);
  }