

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if the storage is null then add a new array(bukects) and insert   [k, v](tuples)
  if (!this._storage[index]) {
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  } else {
  //over write the value of an exsited key
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
      } else {
        this._storage[index].push([k, v]);
      }
    }
  }
  //Time complexity : constant
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //go over the storage if k exist in storag then return the value;
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
  //Time Complixty : lineari

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //go over the storage if k exist in storag then delete it

  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index].splice(i, 1);
    }
  // Time Complexity: Constant;
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


