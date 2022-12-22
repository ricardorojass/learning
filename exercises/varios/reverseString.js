const reverseString = function(str) {
  let i = str.length - 1;
  let newStr = '';
  while (i >= 0) {
    newStr += str[i]
    i--;
  }
  return newStr;
}


console.log(reverseString('hello'));