function uniqueInOrder(iterable) {
    let result = []
    let last
    
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== last) {
        result.push(last = iterable[i])
      }
    }
    
    return result
  }