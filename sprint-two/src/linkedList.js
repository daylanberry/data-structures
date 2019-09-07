var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = new Node(value);
    if (list.head === null && list.tail === null) {
      list.head = newTail;
      list.tail = newTail;
    } else {
      var previousTail = list.tail;
      previousTail.next = newTail;
      list.tail = newTail;
    }

  };

  list.removeHead = function() {
    var currentHead = list.head.value
    list.head =list.head.next
    return currentHead

  };

  list.contains = function(target) {
    var currentNode = list.head;

    while (currentNode.value !== target){
      if (currentNode.next === null){
        return false
      }
      currentNode = currentNode.next
    }

    if (currentNode.value === target){
      return true
    }


  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail = constant;
 removeHead = constant;
 contains = linear
 */
