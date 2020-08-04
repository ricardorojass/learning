// Write a function called `flatten` that receives an
// array of arrays and returns a flattened array.

// console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]

// Casos base
//   flatten([1]) -> push newArray

// Casos recursivos
//   flatten([[1, 2, 3], [4, 5]]) -> flatten([1, 2, 3]) -> flatten([4, 5])

// Solucion Iterativa
// function iterativeFlatten(array) {
//   let flattened = []
//   for (let i = 0; i < array.length; i++) {
//     const firstValue = array[i]
//     if (Array.isArray(firstValue)) {
//       for (let j = 0; j < firstValue.length; j++) {
//         const secondValue = firstValue[j]
//         if (Array.isArray(secondValue)) {
//           for (let k = 0; k < secondValue.length; k++) {
//             const thirdValue = secondValue[k];
//             flattened.push(thirdValue)
//           }
//         } else {
//           flattened.push(secondValue)
//         }
//       }
//     } else {
//       flattened.push(firstValue)
//     }
//   }
//   return flattened
// }
// function recursiveFlatten(array) {
//   let flattened = []

//   array.forEach((child) => {
//     if (Array.isArray(child)) {
//       // Caso recursivo
//       // Concat
//         flattened = flattened.concat(recursiveFlatten(child))
//     } else {
//       // Caso base
//       flattened.push(child)
//     }
//   })
//   return flattened
// }

// Primera Solucion Recursiva
function recursiveFlatten(array) {
  // Caso base
  if (array.length === 0) {
    return []
  }
  // Caso recursivos
  // Acercarse al caso base
  const elem = array[0] // [1, 2, 3]
  if (Array.isArray(elem)) {
    return recursiveFlatten(elem).concat(recursiveFlatten(array.slice(1)))
  } else {
    return [elem].concat(recursiveFlatten(array.slice(1)))
  }
}

console.log(
  recursiveFlatten([1, 2, 3]),
  [1, 2, 3]
  )
console.log(
  recursiveFlatten([[1, 2, 3], 4, [5, 6, 7]]),
[1, 2, 3, 4, 5, 6]
)

console.log(
  recursiveFlatten([[[1, [1.1]], 2, 3], [4, 5]]),
  [1, 1.1, 2, 3, 4, 5]
)

