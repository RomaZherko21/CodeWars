String.prototype.digit = function() {
    let regexp = /^[0-9]$/;
    return  regexp.test(this.toString())
  };