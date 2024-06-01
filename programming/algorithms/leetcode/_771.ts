// input aA, aAAbbbb
// iterar por Stones
//  iterar por Jewels
//    comparar cada stone con cada jewel
//    si alguna es igual, contar
// retornar el numero de stones que son tambien jewels

function numJewelsInStones(J: string, S: string): number {
  let result = 0
  for (let i = 0; i < S.length; i++) {
    let currentStone = S[i]
    for (let j = 0; j < J.length; j++) {
      const currentJewel = J[j];
      if (currentStone === currentJewel) {
        result++
      }
    }
  }
  return result
}

console.log(
  numJewelsInStones("aA", "aAAbbbb"),
  3
)

console.log(
  numJewelsInStones("z", "ZZ"),
);

