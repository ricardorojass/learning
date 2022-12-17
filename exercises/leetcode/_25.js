/**
* https://leetcode.com/problems/reverse-nodes-in-k-group/

* Input: head = [1,2,3,4,5], k = 2
* Output: [2,1,4,3,5]

* @param {ListNode} head
* @param {number} k
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

  reverseKGroup(head, k) {
    if (k <= 1 || head === null) {
      return head;
    }
    // skip the first left - 1 nodes
    let current = head;
    let prev = null;
    while (true) {
      let last = prev;
      let newEnd = current;

      // reverse between left and right
      let next = current.next;
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
        head = prev;
      }

      newEnd.next = current;

      if (current === null) {
        break;
      };

      prev = newEnd;
    }

    return head;
  };

  // reverseKGroup(head, k) {
  //   // Edge case: if k is 1 or the list is empty, return the list as-is
  //   if (k === 1 || head === null) {
  //     return head;
  //   }

  //   // Initialize variables for the linked list traversal
  //   let current = head;
  //   let previous = null;
  //   let i = 0;

  //   // Traverse the linked list
  //   while (current !== null) {
  //       // Reverse the nodes in the group
  //       if (i % k === 0) {
  //           previous = this.reverse(previous, current, k);
  //       }
  //       i++;
  //       current = current.next;
  //   }

  //   return previous;
  // }


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
list.reverseKGroup(list, 2)
list.display()