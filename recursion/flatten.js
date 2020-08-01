// Write a function called `flatten` that receives an
// array of arrays and returns a flattened array.

// console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]

// Casos base
//   flatten()

// Casos recursivos
//   flatten([[1, 2, 3], [4, 5]]) -> flatten([1, 2, 3]) -> flatten([4, 5])

function flatten(array) {
  if (array.length === 1) {
    return array
  }
  return flatten(array[array.length - 1])
}

console.log( flatten([1, 2]) )

// [[[1, [1.1]], 2, 3], [4, 5]]