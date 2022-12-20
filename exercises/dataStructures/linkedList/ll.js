class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // With Tail we can insert last ele in constant time
    this.size = 0;
  }

  // Constant time
  insertFirst(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = this.head;
    }
    this.size++;
  }

  // Constant time
  insertLast(val) {
    if (!this.tail) {
      this.insertFirst(val);
      return;
    }

    let node = new Node(val);
    this.tail.next = node;
    this.tail = node;
    this.size++;
  }

  insertAt(val, index) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    if (index === this.size) {
      this.insertLast(val);
      return;
    }

    let temp = this.head;
    for (let i = 1; i < index; i++) {
      temp = temp.next;
    }

    let node = new Node(val, temp.next);
    temp.next = node;
    this.size++;
  }

  // Insert using recursion
  insertRec(val, index) {
    this.head = this.insertRecPrivate(val, index, this.head);
  }

  insertRecPrivate(val, index, node) {
    if (index === 0) {
      let temp = new Node(val, node);
      this.size++;
      return temp;
    }
    // console.log(`node.next = ${node.next.value}`);
    node.next = this.insertRecPrivate(val, index-1 , node.next);
    return node;
  }

  removeFirst() {
    let val = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return val;
  }

  removeLast() {
    if (this.size <= 1) {
      return this.removeFirst();
    }

    let secondLast = this.getValue(this.size - 2);
    let val = this.tail.value;
    this.tail = secondLast;
    this.tail.next = null;
    return val;
  }

  removeAt(index) {
    if (index === 0) {
      return this.deleteFirst();
    }

    if (index === this.size - 1) {
      return this.deleteLast();
    }

    let prev = this.getValue(index - 1);
    let val = prev.next.value;
    prev.next = prev.next.next;
    return val
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

  getValue(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  // Remove duplicates
  removeDups() {
    let node = this.head;

    while (node.next) {
      if (node.value === node.next.value) {
        node.next = node.next.next;
        this.size--;
      } else {
        node = node.next;
      }
    }
    this.tail = node;
    this.tail.next = null;
  }

  // Merge 2 sorted lists
  static merge(first, second) {
    let f = first.head;
    let s = second.head;

    let ans = new LinkedList();

    while (f && s) {
      if (f.value < s.value) {
        ans.insertLast(f.value);
        f = f.next;
      } else {
        ans.insertLast(s.value);
        s = s.next;
      }
    }

    while (f) {
      ans.insertLast(f.value);
      f = f.next;
    }

    while (s) {
      ans.insertLast(s.value);
      s = s.next;
    }

    return ans;
  }

  // https://leetcode.com/problems/linked-list-cycle/
  // Amazon and Microsoft
  hasCycle(head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
        return true
      }
    }
    return false;
  }

  // find length of the cycle
  lengthCycle(head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
        // Calculate the length
        let temp = slow;
        let length = 0;
        do {
          temp = temp.next;
          length++;
        } while (temp != fast);

        return length;
      }
    }
    return 0;
  }

  // https://leetcode.com/problems/linked-list-cycle-ii/
  detectCycle(head) {
    let length = 0

    let fast = head;
    let slow = head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
        length = this.lengthCycle(slow);
        break;
      }
    }

    if (!length) {
      return null;
    }

    // find the start node
    let f = head;
    let s = head;

    while (length > 0) {
      s = s.next;
      length--;
    }

    // keep moving both forward and they will meet the start node
    while (f != s) {
      f = f.next;
      s = s.next;
    }
    return s;
  }

  // recursion reverse
  reverse(node) {
    if (node === this.tail) {
      this.head = this.tail;
      return;
    }
    reverse(node.next);
    this.tail.next = node;
    this.tail = node;
    this.tail.next = null;
  }

  // in place reversal of linked list
  // https://leetcode.com/problems/reverse-linked-list/
  reverseInPlace() {
    if (this.size < 2) {
      return;
    }

    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      if (next !== null) {
        next = next.next;
      }
    }
    this.head = prev;
  }

  // https://leetcode.com/problems/reverse-nodes-in-k-group/
  reverseKGroup(k) {
    if (k <= 1 || this.head === null) {
      return this.head;
    }
    let current = this.head;
    let prev = null;
    while (true) {
      // check if there are at least k nodes left
      let temp = current;
      for (let i = 0; i < k; i++) {
          if (temp) {
              temp = temp.next;
          } else {
            return this.head
          }
      }

      let last = prev;
      let newEnd = current;

      // reverse between left and right
      let next = null;
      if (next === null) {
        next = current.next;
      }
      for (let i = 0; current && i < k ; i++) {
        current.next = prev;
        prev = current;
        current = next;
        if (next) {
          next = next.next;
        }
      }


      if (last !== null) {
        last.next = prev;
      } else {
        this.head = prev;
      }

      if (newEnd) {
        newEnd.next = current;
      }

      if (current === null) {
        break;
      };

      prev = newEnd;
    }

    return this.head;
  }

  reverseAlternateKGroup(k) {
    if (k <= 1 || this.head === null) {
      return this.head;
    }
    let current = this.head;
    let prev = null;
    while (current) {
      // check if there are at least k nodes left
      let temp = current;
      for (let i = 0; i < k; i++) {
          if (temp) {
              temp = temp.next;
          } else {
            return this.head
          }
      }

      let last = prev;
      let newEnd = current;

      // reverse between left and right
      let next = null;
      if (next === null) {
        next = current.next;
      }
      for (let i = 0; current && i < k; i++) {
        current.next = prev;
        prev = current;
        current = next;
        if (next) {
          next = next.next;
        }
      }


      if (last !== null) {
        last.next = prev;
      } else {
        this.head = prev;
      }

      if (newEnd) {
        newEnd.next = current;
      }

      // skip the k nodes
      for (let i = 0; current && i < k; i++) {
        prev = current;
        current = current.next;
      }
    }

    return this.head;
  }

  display() {
    let temp = this.head;

    while(temp) {
      console.log(temp.value);
      temp = temp.next;
    }
    console.log("END");
    console.log('');
  }
}

let list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
list.insertLast(6);
list.insertLast(7);
list.insertLast(8);
list.insertLast(9);
list.reverseAlternateKGroup(3);
list.display();