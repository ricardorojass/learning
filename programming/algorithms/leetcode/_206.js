// https://leetcode.com/problems/reverse-linked-list/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null) {
      return head;
  }

  let current = head;
  let prev = null;
  let next = current.next;

  while (current !== null) {
    current.next = prev;
    prev = current;
    current = next;
    if (next !== null) {
      next = next.next;
    }
  }
  return prev;
};