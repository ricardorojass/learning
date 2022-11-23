class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let newNode = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    // traverse linked list
    const node = new Node(data);
    let current, previous;

    current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      previous = current; // Node before index
      currentIndex++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }


  // Get at index
  getAt(index) {
    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (currentIndex === index) {
        console.log(current.data);
      }
      currentIndex++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let currentIndex = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next
    } else {
      while(currentIndex < index) {
        currentIndex++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Remove duplicates
  removeDups() {
    const set = new Set()

    let currentNode = this.head;
    let previousNode;


    while (currentNode) {
      if (set.has(currentNode.data)) {
        previousNode.next = currentNode.next;
        this.size--;
      } else {
        set.add(currentNode.data);
        previousNode = currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  // Print list data
  printListData() {
    let current = this.head;

    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

ll.removeAt(3)
ll.printListData()
// ll.getAt(3);