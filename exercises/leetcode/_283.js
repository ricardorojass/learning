// https://leetcode.com/problems/move-zeroes/


/**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Pseudocode

temp = []
zeroCount = 0

iterate numbers
	if nonzero, push to temp
	if zero, increment count

for zeroCount times:
	push zero to temp

return temp

Do it in-place without temp variable

Pseudocode

insertPosition = o
iterate numbers
  if num is not 0
    increase insertPosition
    keep it in insertPosition

  fill the rest in with 0
 */

  var moveZeroes = function(nums) {
    let temp = [];
    let zeroCount = 0

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        temp.push(nums[i]);
        zeroCount++;
      }
    }

    for (let i = 0; i < zeroCount; i++) {
      temp.push(0);
    }

    return temp;
  };


console.log(moveZeroes([0,1,0,3,12]))
