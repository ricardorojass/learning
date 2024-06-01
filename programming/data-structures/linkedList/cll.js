class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class CLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    node.next = this.head;
    this.tail = node;
  }

  delete(val) {
    let node = this.head;
    if (!node) {
      return;
    }

    if (node.value === val) {
      this.head = this.head.next;
      this.tail.next = this.head;
      return;
    }

    do  {
      let n = node.next;
      if (n.value === val) {
        node.next = n.next;
        break;
      }
      node = node.next;
    } while (node != this.head);
  }

  display() {
    let node = this.head;
    if (this.head) {
      do {
        console.log(node.value + ' -> ');
        node = node.next;
      } while (node != this.head);
    }
    console.log('HEAD');
    console.log('');
  }
}

let list = new CLL();
list.insertFirst(23);
list.insertFirst(3);
list.insertFirst(19);
list.insertFirst(75);
list.delete(75);
list.display();
