function repeatStringNumTimes(str, num) {

  if (num <= 0) return ''
  let newString = ''

  while (num > 0) {
    console.log(num)
    newString += str
    num--
  }

  return newString
}

console.log(
  repeatStringNumTimes("abc", 3)
)
console.log(
  repeatStringNumTimes("*", 3)
)