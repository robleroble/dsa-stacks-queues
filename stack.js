/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    // if stack is empty, set this.first and this.last
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    // otherwise, set old first node to be after newNode
    else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    this.size = this.size + 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let removedNode;
    // if stack is empty, throw error
    if (this.size === 0) {
      throw new Error("Nothing to pop from empty stack!");
    }
    // if stack has one item, remove item and set this.first and this.last to null
    else if (this.size === 1) {
      removedNode = this.first;
      this.first = null;
      this.last = null;
    }
    // otherwise, remove first item and set first.next to be new first item
    else {
      removedNode = this.first;
      this.first = this.first.next;
    }
    // reduce size by 1 and return val of removed item
    this.size = this.size - 1;
    return removedNode.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
