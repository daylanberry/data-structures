var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObj = Object.create(stackMethods)

  stackObj.currentSize = 0
  stackObj.instanceObj = {}

  return stackObj;

};


var stackMethods = {
  push: function(value){
    this.currentSize++
    this.instanceObj[this.currentSize] = value
  },

  size: function(){
    return this.currentSize;
  },

  pop: function(){
    if (this.currentSize > 0){
      var current = this.instanceObj[this.currentSize]
      delete current
      this.currentSize--;
      return current;
    }

  }
}


