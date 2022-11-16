function confirmEnding(str, target) {

  const indexStart = str.length - target.length
  const indexEnd = str.length
  return str.substring(indexStart, indexEnd) === target
}

// console.log(
//   confirmEnding("Bastian", "n")
// )
console.log(
  confirmEnding("Congratulation", "on")
)