class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DLL {
  constructor() {
    this.head = null;
  }

  // Constant time
  insertFirst(val) {
    let node = new Node(val);
    node.next = this.head;
    node.prev = null;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
  }

  // O(n)
  insertLast(val) {
    let node = new Node(val);
    let last = this.head;

    node.next = null;

    // If empty, make head
    if (!this.head) {
      node.prev = null;
      this.head = node;
      return;
    }

    while (last.next) {
      last = last.next;
    }
    last.next = node;
    node.prev = last;

  }

  insertAfter(after, val) {
    let p = this.find(after);

    if (!p) {
      console.log('does not exist');
      return;
    }

    let node = new Node(val);
    node.next = p.next;
    p.next = node;
    node.prev = p;
    if (node.next) {
      node.next.prev = node;
    }
  }

  deleteFirst() {
    let val = this.head.value;
    if (!this.head) {
      console.log('zero nodes');
      return;
    }
    this.head = this.head.next;
    this.head.next = this.head.next;
    this.head.prev = null;
    return val;
  }

  deleteLast() {
    let current = this.head;
    let last = null;
    while (current.next) {
      current = current.next;
    }
    const val = current.value;
    last = this.find(current.prev.value)
    last.next = null

    return val;
  }

  find(val) {
    let node = this.head;
    while (node) {
      if (node.value === val) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  display() {
    let node = this.head;
    let last = null;
    while(node) {
      console.log(node.value + ' -> ');
      last = node;
      node = node.next;
    }
    console.log('END');
    console.log(' ');

    console.log('Print in reverse');
    while (last) {
      console.log(last.value + ' -> ');
      last = last.prev;
    }
    console.log(' ');
  }
}

const list = new DLL();

list.insertFirst(3);
list.insertFirst(2);
list.insertFirst(8);
list.insertFirst(17);
list.insertLast(99);
list.insertAfter(99, 65);
// list.deleteFirst();
list.deleteLast();
// list.insertAt(100, 3);
// console.log(list.removeAt(2))
// console.log(list)
list.display()