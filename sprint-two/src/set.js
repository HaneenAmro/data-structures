var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // add key value pair of item to _storage object;
  //Time Complexity : constant;
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // check if object has item and return true if so, if not return false
  // Time Complexity: linear??
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  // delete property
  //Time Comlxity : constant
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
