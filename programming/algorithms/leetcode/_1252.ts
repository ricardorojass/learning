// Given n and m which are the dimensions of a matrix initialized by zeros
// and given an array indices where indices[i] = [ri, ci].
// For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

// Return the number of cells with odd values in the matrix afte
// applying the increment to all indices


function oddCells(n: number, m: number, indices: number[][]): number {
  let count = 0

  let matrix = Array.from({length: n}, () => Array.from({length: m}, () => 0))

  for (const [r, c] of indices) {
    // Update col
    for (let i = 0; i < n; i++) matrix[i][c]++
    // Update row
    for (let i = 0; i < m; i++) matrix[r][i]++
  }

  // Iterate throughout matrix and get number of odds
  matrix.forEach(arr => {
    arr.forEach(current => current % 2 !== 0 ? count++ : null)
  })

  return count
}

console.log(
  oddCells(2, 3, [[0, 1], [1, 1]])
)

console.log(
  oddCells(2, 2, [[1,1],[0,0]])
)