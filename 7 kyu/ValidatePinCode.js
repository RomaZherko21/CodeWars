function validatePIN (pin) {
    let regexp = /^(\d{4}|\d{6})$/g;
    return regexp.test(pin)
  }