// https://leetcode.com/problems/sort-list/

var sortList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let mid = getMid(head);
  let left = sortList(head);
  let right = sortList(mid);

  return merge(left, right);
};

var merge = function(list1, list2) {
  let dummy = new ListNode();
  let head = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }
    dummy = dummy.next;
  }

  if (list1 !== null) {
    dummy.next = list1;
  } else {
    dummy.next = list2;
  }

  return head.next;
}

var getMid = function(head) {
  let midPrev = null;
  while (head !== null && head.next !== null) {
    if (midPrev === null) {
      midPrev = head;
    } else {
      midPrev = midPrev.next;
    }
    head = head.next.next;
  }
  let mid = midPrev.next;
  midPrev.next = null;
  return mid;
};