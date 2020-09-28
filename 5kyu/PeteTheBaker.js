function cakes(recipe, available) {
    let arr = [];
  for (let key in recipe) {

    if (available[key] / recipe[key] >= 1) {
    arr.push(Math.floor(available[key] / recipe[key]));
    } else {
      return 0;
    }
  }
  return arr.sort((a,b)=>a-b)[0];
}
