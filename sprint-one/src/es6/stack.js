class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.currentSize = 0;
    this.storage = {};
  }

  size(){
    return this.currentSize;
  }

  push(value){
    this.storage[this.currentSize] = value
    this.currentSize++
  }

  pop(){
    var current = this.storage[this.currentSize]
    if (this.currentSize > 0){
      this.currentSize--

    }
    return this.storage[this.currentSize]

  }

}

