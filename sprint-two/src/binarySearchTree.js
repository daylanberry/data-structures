var BinarySearchTree = function(value) {
  var binary = {}
  binary.left = null;
  binary.right = null
  binary.value = value

  _.extend(binary, methods)
  return binary

};

var methods = {};

methods.insert = function(value){
  if (value < this.value){
    if (!this.left){
      this.left = BinarySearchTree(value)
    } else {
      this.left.insert(value)
    }
  }

  if (value > this.value){
    if (!this.right){
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value)
    }
  }

}

methods.contains = function(value){
  var currentValue = this.value

  if (currentValue === value){
    return true;
  }

  if (this.left === null && this.right === null){
    return false;
  }

  if (value < currentValue){
    return this.left.contains(value)

  } else if (value > currentValue){
    return this.right.contains(value)
  }
}

methods.depthFirstLog = function(func){
  var current = this.value;
  func(current)

  if (this.left){
    this.left.depthFirstLog(func)
  }

  if (this.right){
    this.right.depthFirstLog(func)
  }
}





/*
 * Complexity: What is the time complexity of the above functions?
 insert - log(n)
 contains - log(n)
 depthFirstLog - linear
 */
