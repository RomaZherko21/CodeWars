function removeSmallest(numbers) {
    let min = Math.min(...numbers);
    let index = numbers.indexOf(min);
    return numbers.filter((item,id)=>id!==index)
  }