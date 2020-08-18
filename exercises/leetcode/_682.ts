function calPoints(ops: string[]): number {
  let stack = []
  let sum = 0

  for (let i = 0; i < ops.length; i++) {
    const currentElement = ops[i]

    if (!isNaN(Number(currentElement))) {
      const numToSum = Number(currentElement)
      sum += numToSum
      stack.push(numToSum)
    } else {
      if (currentElement === 'C') {
        const lastElement: number | undefined = stack.pop()
        sum -= lastElement ? lastElement : 0
    }

    if (currentElement === 'D') {
        const lastOperation: number = stack[stack.length - 1]
        const double: number = lastOperation * 2
        sum += double
        stack.push(double)
    }

    if (currentElement === '+') {
        const lastOperation: number = stack[stack.length - 1]
        const beforeLastOperation: number = stack[stack.length - 2]
        const sumOperations: number = lastOperation + beforeLastOperation
        sum += sumOperations
        stack.push(sumOperations)
    }
    }
  }

  return sum
}

console.log(
  calPoints(["5","2","C","D","+"])
)

console.log(
  calPoints(["5","-2","4","C","D","9","+","+"])
)






