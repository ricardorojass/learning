/*
  Merge two sorted linked lists and return it as a new sorted list.
  The new list should be made by splicing together the nodes
  of the first two lists.
*/

/**
 * Definition for singly-linked list.
*/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Input: [1,2,4], [1,3,4]
// Output: [1,1,2,3,4,4]

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummy = new ListNode(-1)
  let head = dummy

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      dummy.next = l1
      l1 = l1.next
    } else {
      dummy.next = l2
      l2 = l2.next
    }
    dummy = dummy.next
  }

  if (l1 !== null) {
    dummy.next = l1
  } else {
    dummy.next = l2
  }

  return head.next
}

// function mergeTwoLists(l1: number[] | null, l2: number[] | null): number[] | null {

//   let mergeArray = [...l1, ...l2]
//   mergeArray.sort()
//   return mergeArray
// }

// console.log(
//   mergeTwoLists([1,2,4], [1,3,4])
// )


