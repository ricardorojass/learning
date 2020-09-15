/* Pasos
  1. Entender el problema (hacer mas ejemplos)
  2. Proponer una solucion que sea mas sencilla
  3. Escribir la soluciones en terminos matematicos
  3. Escribir la solucion
  4. Corre la solucion
  5. Refactor
  6. Enviar
  7. Comparar
*/

/*
  n y m
  1807, 7810 = 1A3B
  n1 esta en m true 0A1B
  n2 esta en m true 1A1B
  n3 esta en m true 1A2B
  n4 esta en m true 1A3B

  si n esta en m 1B
  si n esta en m y es el mismo indice 1A
  O(nxn)

  let a: number = 0
  let b: number = 0
  for
    condition 1
      b++
    condition 2
      a++

  return `${a}A${b}B`
*/

const obj = {
  1: 0,
  8: 1
}


function getHint(secret: string, guess: string): string {
  let bulls = 0, cows = 0
  let map: {[index: string]: any} = {} // usamos un hash para contar
  // los caracteres que encontramos en guess
  /*
    Primero guardamos el numero de ocurrencias por cada char
    de secret
  */
  for (let i = 0; i < secret.length; i++) {
    const key = secret[i]
    if (map[key]) {
      map[key]++
    } else {
      map[key] = 1
    }
  }

  /*
    Aca miramos si hay bulls, que los chars
    sean iguales en la misma posicion y restamos la ocurrencia
    en el hash si ya es un bull.
  */
  for (let i = 0; i < guess.length; i++) {
    if (secret[i] == guess[i]) {
      bulls++
      map[secret[i]]--
    }
  }

  /*
    Aca miramos en el hash si un guess esta en en hash,
    y que no sean iguales en su posicion que es un cow.
    Luego restamos la ocurrencia de ese char en el map.
    Luego miramos si la ocurrencia es 0 en ese char
    quiere decir que es un cow.
  */

  for (let i = 0; i < guess.length; i++) {
    if (map[guess[i]] && (guess[i] != secret[i])) {
      map[guess[i]]--

      if (map[guess[i]] >= 0) {
        cows++
      }
    }
  }

  return `${bulls}A${cows}B`

}


console.log(
  getHint('1807', '7810')
)

console.log(
  getHint('1123', '0111')
)

console.log(
  getHint('11', '10')
)
