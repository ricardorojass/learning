/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/
var rotateRight = function(head, k) {
  if (k <= 0 || head === null || head.next === null) {
    return head;
  }

  let last = head;
  let length = 1;
  while (last.next) {
    last = last.next;
    length++;
  }

  last.next = head;
  const rotations = k % length;
  const skip = length - rotations;

  let newLast = head;
  for (let i = 0; i < skip - 1; i++) {
    newLast = newLast.next;
  }

  head = newLast.next;
  newLast.next = null
  return head;
};