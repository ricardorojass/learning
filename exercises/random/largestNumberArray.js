function largestOfFour(arr) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    const largestNum = elem.sort((a, b) => a - b)[elem.length - 1]

    result.push(largestNum)
  }

  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

