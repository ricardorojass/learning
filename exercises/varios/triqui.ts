function triqui(board: string[][]) {
  if (board.length && board[0].length && board[1].length && board[2].length) {
    // Verificar las columnas
    if (board[0][0] !== '-') {
      // Columna 1 Fila 1
      if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
        return true
      }
      if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
        return true
      }
      // Diag Arriba izq der
      if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true
      }
    }

    if (board[0][1] !== '-') {
      // Columna 2
      if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
        return true
      }
    }

    if (board[0][2] !== '-') {
      // Columna 3
      if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
        return true
      }
    }
    // Verificar filas
    if (board[1][0] !== '-') {
      // Fila 2
      if (board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
        return true
      }
    }
    if (board[2][0] !== '-') {
      // Fila 3
      if (board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
        return true
      }
      // Diag Abajo izq der
      if (board[2][0] === board[1][1] && board[2][0] === board[1][2]) {
        return true
      }
    }
    return false
  } else {
    return false
  }
}

const board1 = [
  ['X', 'O', '-'],
  ['O', 'O', 'X'],
  ['-', 'O', 'X']
]
const board2 = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']
]

const board3 = [
  ['-', '-', '-'],
  ['O', 'O', 'X'],
  ['-', 'O', 'X']
]
console.log(
  triqui(board1)
)
console.log(
  triqui(board2)
)
console.log(
  triqui(board3)
)