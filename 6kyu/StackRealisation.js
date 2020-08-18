class Stack {
    constructor(arr) {
      this.arr = arr;
    }
  
    get() {
      let value = this.arr[this.arr.length - 1];
      this.arr.length = this.arr.length - 1;
      return value;
    }
    set(value) {
      this.arr[this.arr.length] = value;
    }
  }
  
  