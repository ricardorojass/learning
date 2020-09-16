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
