var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  //use _.extend fuunction to delegate to treeMethods
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  // callback Tree function with a parameter value to crate a new node
  // push it to children arra
  this.children.push(Tree(value));
  // [value, children]
  //time Complexity logarthimic
};

treeMethods.contains = function (target) {
  // start with root node if the value of the node equal target return true

  if (this.value === target) {
    return true;
  }
  //itrate over each node in the tree an d subtrees and callback contains function

  for (var i = 0; i < this.children.length; i++) {
    //this.contains(this.children[i]);
    if (this.children[i].contains(target)) {
      return true;
    }
  }

  //if not return false
  //time Complexity logarthimic
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
