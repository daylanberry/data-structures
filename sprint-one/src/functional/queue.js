var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentSize = 0;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[currentSize] = value;
    currentSize++
    size++;

  };

  someInstance.dequeue = function() {

    for (var prop in storage){
      if (prop === prop){
        var current = storage[prop];
        delete storage[prop];
        if (size > 0){
          size--
        }
        return current
      }
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
