

// Instantiate a new graph
var Graph = function(node) {
  this.node = {};
  this.edges = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.node[node] = node;
  this.edges[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var prop in this.node){
    if (this.node[prop] === node){
      return true;
    }
  }
  return false

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.node[node]

  for (var prop in this.edges){
    if (prop === node){
      delete this.edges[prop]
    }
    if (this.edges[prop][node] === node){
      delete this.edges[prop]
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //this.edges = {fromNode: {toNode: toNode, otherNode: otherNode} }
  if (!this.edges.hasOwnProperty(fromNode)){
    return false
  }

  return this.edges[fromNode].hasOwnProperty(toNode)
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode][toNode] = toNode
  this.edges[toNode][fromNode] = fromNode
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode][toNode]
  delete this.edges[toNode][fromNode]
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var prop in this.node){
    cb(this.node[prop])
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode - constant
 contains - linear
 removeNode - liner
 hasEdge - constant
 removeEdge - constant
 forEachNode - linear
 */


