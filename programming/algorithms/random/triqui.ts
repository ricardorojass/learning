function triqui(board: string[][]) {
  let result = []
  // filas
  for (let i = 0; i < board.length; i++) {
    const char = board[i][0]
    if (char !== '-') {
      result.push(isThereT(char, board[i]))
    }
  }
  // Columnas
  for (let i = 0; i < board.length; i++) {
    let columns = []
    const char = board[0][i]

    for (let j = 1; j < board[i].length; j++) {
      columns.push(board[j][i])
    }

    if (char !== '-') {
      result.push(isThereT(char, columns))
    }
  }

  // Diagonal arriba izq der
  let diagonales = []
  for (let i = 1; i < board.length; i++) {
    const char = board[0][i]
    diagonales.push(board[i][i])
    if (char !== '-') {
      result.push(isThereT(char, diagonales))
    }
  }

  // Diagonal arriba der izq
  diagonales = []
  for (let i = 0, j = board.length; i < board.length; i++) {
    j--
    diagonales.push(board[i][j])
  }

  const char = board[0][board.length - 1];
  if (char !== '-') {
    const match = isThereT(char, diagonales)
    result.push(match)
  }

  function isThereT(value, arr) {
    return arr.every(char => char === value)
  }

  return result.includes(true)
}


const board1 = [
  ['X', 'O', '-'],
  ['O', 'O', 'X'],
  ['-', 'O', 'X']
]

const board2 = [
  ['X', 'X', 'O'],
  ['O', 'O', 'X'],
  ['O', 'O', 'X']
]
const board3 = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']
]

const board4 = [
  ['-', '-', '-'],
  ['O', 'O', 'X'],
  ['-', 'O', 'X']
]

const board5 = [
  ['X', 'X', '-', 'X'],
  ['O', 'O', 'X', 'O'],
  ['-', 'X', 'X', '-'],
  ['X', 'O', 'X', 'X']
]

console.log(
  triqui(board1)
)
console.log(
  triqui(board5)
)
console.log(
  triqui(board2)
)
console.log(
  triqui(board3)
)