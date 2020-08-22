

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
  // Time Complexity : constant;
  this.storage[node] = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // Time Complexity: linear?
  return (this.storage.hasOwnProperty(node));
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Time Complexity: linear;
  while (this.storage[node].length) {
    var index = this.storage[node].pop();
    this.removeEdge(node, index);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //Time Complexity : linear;/
  // return (this.storage[fromNode].includes(toNode));
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
  // Time Complexity: constant;
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);

};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // Time Complexity: linear;
  this.storage[fromNode] = _.filter(this.storage[fromNode], function(num) {
    toNode !== num;
  });
  this.storage[toNode] = _.filter(this.storage[toNode], function(num) {
    fromNode !== num;
  });

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //Time Complxity : linear;
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


