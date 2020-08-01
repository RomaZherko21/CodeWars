let solve = arr =>
  arr.find(val => !arr.includes(-val));

console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
