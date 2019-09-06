var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.currentSize = 0
  this.instObj = {}


};

Stack.prototype.push = function(value){
  this.storage[this.currentSize] = value
  this.currentSize++
}

Stack.prototype.pop = function(){
  if (this.currentSize > 0){
    this.currentSize--
  }
  var current = this.storage[this.currentSize]
  delete current
  return current
}

Stack.prototype.size = function(){
  return this.currentSize
}