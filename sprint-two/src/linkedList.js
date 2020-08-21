var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  //list.length = 0;

  list.addToTail = function(value) {
    //i -> value
    //Complixity : constant
    // head = null  tail = null;
    // // node - something;
    // var newNode = Node(value);

    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    // // tail = something   head = something;
    // //
    // node - other;
    // tail = other  head = something;

  };
  console.log(list);
  list.removeHead = function() {
    // O : list
    //Complixity : constant
    // remove whole node
    var current = list.head.value;
    list.head = list.head.next;
    return current;
    // // reassign head to the next node
    // // return list without headg
  };

  list.contains = function(target) {
    // I: target
    // // O ; boolean
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;

    }
    return false;


    //Complixity : linear
    // look into every node value
  // if node.value inside node is equal to target
  // return true
  // else return false
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
