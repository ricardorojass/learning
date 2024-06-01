// https://leetcode.com/problems/reorder-list/
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (head === null || head.next === null) {
    return;
  }

  let mid = middleNode(head);
  let hs = reverseList(mid);
  let hf = head;

  // rearrange
  while (hf !== null && hs !== null) {
    let temp = hf.next;
    hf.next = hs
    hf = temp;

    temp = hs.next;
    hs.next = hf;
    hs = temp
  }

  if (hf !== null) {
    hf.next = null;
  }
};

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

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