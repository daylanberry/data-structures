var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    currentSize: 0,
    sizes: 0
  };

  _.extend(someInstance, queueMethods)

  return someInstance
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.currentSize] = value;
    this.currentSize++
    this.sizes++
  },

  dequeue: function(){
    for (var prop in this.storage){
      if (prop === prop){
        var current = this.storage[prop];
        delete this.storage[prop];
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


