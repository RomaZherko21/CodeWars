function solution(input, markers) {
    for (let item of markers) {
      regexp = new RegExp(` ${item}.*`, "gi");
      input = input.replace(regexp, "");
    }
    if (input[input.length - 1] == " ") input = input.slice(0, input.length - 1);
    if (input[0] == " ") input = input.slice(1, input.length);
    return input;
  }
  
  console.log(
    solution("Q @b\nu\ne -e f g", ["@", "-"]).split('')
  );