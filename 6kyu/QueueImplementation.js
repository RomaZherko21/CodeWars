class Queue {
    constructor(arr) {
      this.arr = arr;
    }
  
    get() {
      let value = this.arr[0];
      let newArr = [];
      for (let i = 1; i < this.arr.length; i++) {
        newArr.push(this.arr[i]);
      }
      this.arr = newArr;
      return value;
    }
    set(value) {
      this.arr[this.arr.length] = value;
    }
  }