String.prototype.camelCase = function () {
  console.log(this.valueOf().split(" "));
  return this.split(" ")
    .filter((item) => item !== "")
    .map((item) => (item = item[0].toUpperCase() + item.slice(1)))
    .join("");
};
