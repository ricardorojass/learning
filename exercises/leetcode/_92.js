// https://leetcode.com/problems/reverse-linked-list-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}
class LL {

  constructor() {
    this.head = null
  }

  // Insert last node
  insertLast(data) {
    let newNode = new Node(data);
    let current = null;

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
  }

  reverseBetween(head, left, right) {
    if (left === right) return head;

    // skip the first left - 1 nodes
    let current = head;
    let prev = null;
    for (let i = 0; current !== null && i < left - 1; i++) {
      prev = current;
      current = current.next;
    }

    let last = prev;
    let newEnd = current;

    // reverse between left and right
    let next = current.next;
    for (let i = 0; current !== null && i < right - left + 1 ; i++) {
      current.next = prev;
      prev = current;
      current = next;
      if (next !== null) {
        next = next.next;
      }
    }

    if (last !== null) {
      last.next = prev;
    } else {
      head = prev;
    }
    newEnd.next = current;
    return head;
  };

  display() {
    let current = this.head;

    while(current) {
      console.log(current.val);
      current = current.next;
    }
    console.log("END");
    console.log('');
  }
}

let list = new LL();
list.insertLast(1)
list.insertLast(2)
list.insertLast(3)
list.insertLast(4)
list.insertLast(5)
list.display()
list.reverseBetween(list, 2,4)
