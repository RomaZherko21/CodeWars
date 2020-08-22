function prefill(n, v) {
    if (!Number.isInteger(+n) || +n < 0 || typeof n === 'boolean') throw new TypeError(`${n} is invalid`);
    return Array.from(Array(+n), x => v);
    
  }