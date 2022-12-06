/*
  Merge two sorted linked lists and return it as a new sorted list.
  The new list should be made by splicing together the nodes
  of the first two lists.
*/

/**
 * Definition for singly-linked list.
*/
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Input: [1,2,4], [1,3,4]
// Output: [1,1,2,3,4,4]

class LL {

  constructor() {
    this.head = null;
  }

  insertFirst(val) {
    this.head = new Node(val, this.head);
  }

  static merge(l1, l2) {
    let list1 = l1.head;
    let list2 = l2.head;
    let dummy = new LL()

    while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
        dummy.next = list1
        list1 = list1.next
      } else {
        dummy.next = list2
        list2 = list2.next
      }
      dummy = dummy.next
    }

    if (list1 !== null) {
      dummy.next = list1
    } else {
      dummy.next = list2
    }

    return dummy.next
  }

  display() {
    let temp = this.head;

    while(temp) {
      console.log(temp.val + ' -> ');
      temp = temp.next;
    }
    console.log("END");
    console.log('');
  }
}

// function mergeTwoLists(l1: number[] | null, l2: number[] | null): number[] | null {

//   let mergeArray = [...l1, ...l2]
//   mergeArray.sort()
//   return mergeArray
// }

let l1 = new LL();
let l2 = new LL();
l1.insertFirst(4)
l1.insertFirst(2)
l1.insertFirst(1)

l2.insertFirst(4)
l2.insertFirst(3)
l2.insertFirst(1)
l2.display()

let ans = LL.merge(l1, l2);
ans.display()


