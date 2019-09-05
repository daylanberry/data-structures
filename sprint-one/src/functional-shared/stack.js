var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObj = {
    currentSize: 0,
    decObj: {}
  };

  _.extend(stackObj, stackMethods)

  return stackObj;
};


var stackMethods = {
  push : function(value){
    this.decObj[this.currentSize] = value;
    this.currentSize++
  },

  size: function(){
    return this.currentSize;
  },

  pop: function(){
    if (this.currentSize > 0){
      this.currentSize--;
      return this.decObj[this.currentSize]
    }
  }
};


