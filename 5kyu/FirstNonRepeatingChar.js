function firstNonRepeatingLetter(str){
    return str.split('').find(e => str.match(new RegExp(`${e}`, 'gi')).length === 1) || ''
  }