// Factorial
// 5! -> 5 * 4 * 3 * 2 * 1 = 120
// 5! -> 5 * 4!
// 4! -> 4 * 3!
// 3! -> 3 * 2!
// 2! -> 2 * 1!
// 1! -> 1

// 1. Casos base o triviales
//    Es para evitar que no ocurra un Stack Overflow.
//    En esta seccion le decimos al programa que pare.
// 2. Casos generales o recursivo
// 3. Verificar que los argumentos que se le pasen a la funcion
//    se acerquen a los casos triviales

function factorial(n) {
  if (n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log(factorial(5))

// Vs la misma solucion de forma iterativa

// function factorial(n) {
//   let fact = 1
//   for (let i = 1; i <= n; i++) {
//     fact *= i
//   }
//   return fact
// }
