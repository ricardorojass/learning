// https://leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};