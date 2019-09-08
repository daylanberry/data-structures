

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];

  if (this._storage.get(index) === undefined){
    bucket.push([k, v])
    this._storage.set(index, bucket)
  } else{
    var newBucket = this._storage.get(index);
    for (var i = 0; i <newBucket.length; i++){
      if (newBucket[i][0] === k){
        newBucket[i][1] = v;
      }
    }
    newBucket.push([k, v])
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var currentBucket = this._storage.get(index)

  for (var i = 0; i < currentBucket.length; i++){
    if (currentBucket[i][0] === k){
      return currentBucket[i][1]
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var newBucket = this._storage.get(index)

  for (var i = 0; i < newBucket.length; i++){
    if (newBucket[i][0] === k){
      newBucket.splice(i, 1)
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 insert = constant;
 retrieve = constant
 remove = constant

 */


