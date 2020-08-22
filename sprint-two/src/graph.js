

// Instantiate a new graph
var Graph = function() {
  //create a storage obj
  this.storage = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // input node
  // create a object node
  // add to storage object
  this.storage[node] = [];
  // this.storage[node].value = node;
  // this.storage[node].next = null;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // if (this.storage[node].value === node) {
  //   return true;
  // }
  if (this.storage.hasOwnProperty(node)) {
    return true;
  }
  return false;


};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  delete this.storage[node];


};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode]) {
    if (this.storage[fromNode].includes(toNode)) {
      return true;
    }
    return false;

  } else {
    return false;
  }
};


// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.storage[fromNode].push(toNode);
  this.storage[fromNode].push(fromNode);

};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var i = this.storage[fromNode].indexOf(toNode);
  this.storage[fromNode].splice(i, 1);

  var j = this.storage[toNode].indexOf(fromNode);
  this.storage[toNode].splice(j, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


