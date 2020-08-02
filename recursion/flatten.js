// Write a function called `flatten` that receives an
// array of arrays and returns a flattened array.

// console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]

// Casos base
//   flatten()

// Casos recursivos
//   flatten([[1, 2, 3], [4, 5]]) -> flatten([1, 2, 3]) -> flatten([4, 5])

// Solucion Iterativa
function iterativeFlatten(array) {
  let flattened = []
  for (let i = 0; i < array.length; i++) {
    const firstValue = array[i]
    if (Array.isArray(firstValue)) {
      for (let j = 0; j < firstValue.length; j++) {
        const secondValue = firstValue[j]
        if (Array.isArray(secondValue)) {
          for (let k = 0; k < secondValue.length; k++) {
            const thirdValue = secondValue[k];
            flattened.push(thirdValue)
          }
        } else {
          flattened.push(secondValue)
        }
      }
    } else {
      flattened.push(firstValue)
    }
  }
  return flattened
}

// Primera Solucion Recursiva
// function recursiveFlatten(array) {
//   // Caso base
//   if (!Array.isArray(array)) {
//     return array
//   }
//   // Caso recursivos
//   // return recursiveFlatten(array)
//   return array
// }

function recursiveFlatten(array) {
  let flattened = []

  array.forEach((child) => {
    if (Array.isArray(child)) {
      // Caso recursivo
      // flattened = flattened.concat(recursiveFlatten(child))
      flattened = [...flattened, recursiveFlatten(child)]
    } else {
      // Caso base
      flattened.push(child)
    }
  })
  return flattened
}

console.log(
  recursiveFlatten([1, 2, 3]).toString() ===
  [1, 2, 3].toString()
)

console.log(
  recursiveFlatten([1, 2, 3, 4, 5]).toString() ===
  [1, 2, 3, 4, 5].toString()
)

console.log(
  iterativeFlatten([[1, 2, 3], [4, 5]]).toString() ===
[1, 2, 3, 4, 5].toString()
)

console.log(
  recursiveFlatten([[[1, [1.1]], 2, 3], [4, 5]]).toString() ===
  [1, 1.1, 2, 3, 4, 5].toString()
)

