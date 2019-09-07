var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // list.tail = value
    var newTail = new Node(value);
    if (list.head === null && list.tail === null) {
      list.head = newTail;
      list.tail = newTail;
    } else {
      var previousTail = list.tail;
      previousTail.next = newTail;
      list.tail = newTail;
    }
    //if head = null, point to new node
    //list.tail = create new node
    //if list.tail has an old node, old node points to new key and list.tail points to new key
  };

  list.removeHead = function() {
    //if head is null, return undefined or null
    //head points to node.next.next
    //delete node
  };

  list.contains = function(target) {
    for (var prop in list.head){
      if (type )
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
 */
