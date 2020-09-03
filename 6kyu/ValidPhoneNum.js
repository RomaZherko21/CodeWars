function validPhoneNumber(phoneNumber){
    return Boolean(phoneNumber.match(/^(\()?\d{3}(\))\s(\s)?\d{3}(-)\d{4}$/))
  }