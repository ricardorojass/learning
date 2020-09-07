/*
Given a non-negative integer num,
repeatedly add all its digits until the result has only one digit.
*/

/*
1. Entender el problema
2. Escribir algunos ejemplos
3. Pensar en casos degenerados
3. Escribir el problema en terminos matematicos
4. Encontrar la solucion mas sencilla.
5. Refactorizar
*/
/*
1. Entender el problema.
Dado un numero no negativo.
Sumar repeditamente todos sus digitos hasta que le resultado solo tenga 1 digito.

Sumar los numeros con digitos > 1
hasta que el digito sea == 1

2. Escribir algunos ejemplos.

43
4+3 = 7
7

59
5+9 = 14, 1 + 4 = 5

38
3+8 = 11, 1+1 = 2

3. Pensar en casos degenarados. ?
4. Escribir el problema en terminos matematicos. ?

*/

function addDigits(num: number): number {
  // const digits = num.toString()
  // let sum = 0
  // for (let i = 0; i < digits.length; i++) {
  //   sum += Number(digits[i])
  // }
  // if (sum > 9) {
  //   return addDigits(sum)
  // }
  // return sum
  if (num == 0) return 0;
  if (num % 9 == 0) return 9;
  return num % 9;
}

console.log(
  addDigits(38) == 2
)
console.log(
  addDigits(43) == 7
)
console.log(
  addDigits(59) == 5
)