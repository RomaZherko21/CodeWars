function alphabetPosition(text) {
    return text
      .split("")
      .map((item) => item.toLocaleLowerCase().charCodeAt() - 96)
      .filter((item) => item >=1 && item <= 26)
      .join(" ");
  }