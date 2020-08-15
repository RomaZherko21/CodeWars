function songDecoder(str) {
    return str.split("WUB").filter(item=>item!=="").join(" ");
  }