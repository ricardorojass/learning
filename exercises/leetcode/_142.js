// https://leetcode.com/problems/linked-list-cycle-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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