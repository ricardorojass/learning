// Write a function called harmonicSum that calculates
// the harmonic sum of n. The harmonic sum is the sum
// of reciprocals of the positive integers.

// Examples

// harmonicSum(1); // 1
// harmonicSum(2); // 1 + 1/2 = 1.5
// harmonicSum(3); // 1 + 1/2 + 1/3 = 1.833333

// Caso base
// harmonicSum(1) -> 1

// Casos recursivos
// harmonicSum(2) -> harmonicSum(1) + 1/2
// harmonicSum(3) -> harmonicSum(2) + 1/3
// harmonicSum(4) -> harmonicSum(3) + 1/4

function harmonicSum(n) {
  if (n === 1) {
    return n
  }

  return harmonicSum(n - 1) + 1/n
}

console.log(harmonicSum(10))