// https://leetcode.com/problems/palindrome-linked-list/
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // get mid
  let mid = getMid(head);
  // reverse de second half
  let headSecond = reverseList(mid);
  let rereverseHead = headSecond;
  // compare half with the second half

  while (head !== null && headSecond !== null) {
    if (head.val !== headSecond.val) {
      break;
    }
    head = head.next;
    headSecond = headSecond.next;

  }
  // re-reverse the second half
  reverseList(rereverseHead);
  if (head === null || headSecond === null) {
    return true;
  }
  return false;
};

var getMid = function(head) {
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