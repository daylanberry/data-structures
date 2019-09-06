var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObj = Object.create(queueMethods);

  stackObj.currentSize = 0
  stackObj.sizes = 0
  stackObj.storage = {}

  return stackObj
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.currentSize] = value
    this.sizes++
    this.currentSize++

  },

  dequeue: function(){
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

  },

  size: function(){
    return this.sizes
  }
};



