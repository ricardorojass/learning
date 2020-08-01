// Fibonacci
// 1 1 2 3 5 8 13
// fib(6) -> 13
// fib(6) -> fib(5) + fib(4)
// Caso recursivo
//   fib(n) -> fib(n-1) + fib(n-2)

// Caso base
//   fib(0), fib(1) -> 1

// Tecnica para optimizar
// Memoizacion
// Programacion dinamica

function fib(memo, n) {
  if (memo[n]) {
    return memo[n]
  }

  memo[n-1] = fib(memo, n-1)
  memo[n-2] = fib(memo, n-2)
  return memo[n-1] + memo[n-2]
}

console.log(fib( { 0: 1, 1: 1 }, 100 ))