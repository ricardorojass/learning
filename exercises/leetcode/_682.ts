function calPoints(ops: string[]): number {
  let stack = []

  for (let i = 0; i < ops.length; i++) {
    const currentElement = ops[i]

    // comparar con el ascii
    if (!isNaN(Number(currentElement))) {
      const numToSum = Number(currentElement)
      stack.push(numToSum)
    } else {
      if (currentElement === 'C') {
        stack.pop()
    }

    if (currentElement === 'D') {
        const lastOperation: number = stack.pop()
        const double: number = lastOperation * 2
        stack.push(lastOperation)
        stack.push(double)
    }

    if (currentElement === '+') {
        const first: number = stack.pop()
        const second: number = stack.pop()
        const sumOperations: number = first + second
        stack.push(second)
        stack.push(first)
        stack.push(sumOperations)
    }
    }
  }

  let sum = 0
  while (stack.length) {
    sum += stack.pop()
  }

  return sum
}

console.log(
  calPoints(["5","2","C","D","+"])
)

console.log(
  calPoints(["5","-2","4","C","D","9","+","+"])
)






