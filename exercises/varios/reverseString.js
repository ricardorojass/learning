// two pointers
// time complex: O(n)
const reverseString = function(str) {
  let newStr = str.split('');
  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
    // swap str
    const temp = newStr[start];
    newStr[start] = newStr[end]
    newStr[end] = temp;
    start++;
    end--;
  }
  return newStr.join('');
}


console.log(reverseString('hello'));