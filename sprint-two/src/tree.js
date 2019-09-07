var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newBranch = new Tree(value)

  this.children.push(newBranch)

};

treeMethods.contains = function(target) {
  var currentValue = this.value;
  var boolean = false

  if (currentValue === target){
    return true;
  }

  if (currentValue !== target){
    for (var i = 0; i < this.children.length; i++){
      if (this.children[i].value === target){
        boolean = true
      }
      boolean = boolean || this.children[i].contains(target)

    }
  }
  return boolean

};



/*
 * Complexity: What is the time complexity of the above functions?
 addToChild = constant;
 contain = linear;
 */
