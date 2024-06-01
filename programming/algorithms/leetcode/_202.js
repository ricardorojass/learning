// https://leetcode.com/problems/happy-number/

function isHappy(n) {
  let slow = n;
  let fast = n;

  do {
    slow = findSquare(slow);
    fast = findSquare(findSquare(fast));
  } while (slow !== fast);

  if (slow === 1) {
    return true;
  }
  return false;
}

function findSquare(number) {
  let ans = 0;
  const digits = number.toString().split('')
  for (let i = 0; i < digits.length; i++) {
    const toNumber = Number(digits[i]);
    ans += toNumber * toNumber;
  }
  return ans;
}

console.log(isHappy(5))