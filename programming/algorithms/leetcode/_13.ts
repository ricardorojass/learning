function romanToInt(s: string): number {
  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let total = 0

  for (let i = 0; i < s.length; i++) {
    const current = romanNumber[s[i]]
    const next = romanNumber[s[i + 1]]

    /*
      Si el current es mayor o igual al sgte, sumar el current
      sino, sumar la diferencia del sgte y el current
    */
    if (next) {
      if (current >= next) {
        total += current
      } else {
        total += (next - current)
        i++
      }
    } else {
      total += current
    }

  }
  return total
}

console.log(
  romanToInt("III")
)

console.log(
  romanToInt("IV")
)

console.log(
  romanToInt("LVIII")
)

console.log(
  romanToInt("MCMXCIV")
)