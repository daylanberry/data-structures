var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.currentSize = 0
  this.sizes = 0
};

Queue.prototype.enqueue = function(value){
  this.storage[this.currentSize] = value;
  this.sizes++
  this.currentSize++
}

Queue.prototype.dequeue = function(){
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

Queue.prototype.size = function(){
  return this.sizes
}


