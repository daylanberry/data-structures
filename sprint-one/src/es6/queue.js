class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.sizes = 0;
    this.currentSize = 0;
    this.storage = {};
  }

  size(){
    return this.sizes
  }

  enqueue(value){
    this.storage[this.currentSize] = value
    this.sizes++
    this.currentSize++
  }

  dequeue(){
    for (var key in this.storage){
      if (key === key){
        var current = this.storage[key]
        delete this.storage[key]
        if (this.sizes > 0){
          this.sizes--
        }
        return current
      }
    }
  }

}
