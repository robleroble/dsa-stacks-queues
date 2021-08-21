/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);

    // if queue is empty (we have to set this.first and this.last)
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    // if queue is not empty (we have to change this.last)
    else {
      // set newNode to follow after the current this.last
      this.last.next = newNode;
      // make newNode the new last val
      this.last = newNode;
    }
    // for either case we have to increase this.size by 1
    this.size = this.size + 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // declare a variable to store the first node (we need to return first node's value)
    let removedNode;
    // we can't dequeue from an empty queue
    if (this.size === 0) {
      throw new Error("There is nothing left in the queue to remove");
    }
    // if queue has length of 1 (we will have to set first and last to null)
    else if (this.size === 1) {
      removedNode = this.first;
      this.first = null;
      this.last = null;
    }
    // if queue has length of 2 or greater (we will have to change this.first)
    else if (this.size > 1) {
      removedNode = this.first;
      this.first = this.first.next;
    }
    this.size = this.size - 1;
    return removedNode.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
