class Dictionary {
    constructor() {
     
    }
    
    newEntry(key, value) {
      this[key] = value;
    }
    
    look(key) {
      if(this[key]) return this[key];
      return `Can\'t find entry for ${key}`
    }
  }
