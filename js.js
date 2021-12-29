// This file explores the use of Data Structures and Algorithms

// STACK

const letters = [];

const word = "racecar";

let rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}

// Implementation with Constructor Function

const Stack = function() {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count --;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result
  }

  this.size = function() {
    return this.count;
  }

  // Returns the value at the end of the stack
  this.peek = function(value) {
    return this.storage[this.count-1];
  }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());




/* Sets */

function mySet() {
  // the const collection will hold the set
  const collection = [];
  //this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return (collection.indexOf(element) !== -1);
  };
  // this method will return all the values in the set
  this.values = function() {
    return collection;
  };
  // this method will add an element to the set
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  //this method will remove an element from a set
  this.remove = function(element) {
    if(this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index,1);
      return true;
    }
    return false;
  };
  //the following methods are not included in ES6 sets
  // this method will return the union of the two sets
  this.union = function(otherSet) {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forEach(function(e) {
      unionSet.add(e);
    });
    return unionSet;
  };
  // this method will return the intersection of two sets as a new set(all items that are in both sets)
  this.intersection = function(otherSet) {
    const intersectionSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // this method will return the difference of two sets as a new set
  this.difference = function(otherSet) {
    const differenceSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach(function(e) {
      if(!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  // this method will test if the set is a subset of a different set
  this.subset = function(otherSet) {
    const firstSet = this.values();
    return firstSet.every(function(value) {
      return otherSet.has(value);
    });
  };
}

const setA = new mySet();
const setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

/* Queue */
function Queue() {
  collection = [];
  this.print = function() {
    console.log(collection)
  };
  this.enqueue = function(element) {
    collection.push(element);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return (collection.length === 0);
  };
}

const q = new Queue();
q.enqueue('a');


