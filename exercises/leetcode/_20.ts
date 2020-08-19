//Given a string containing just the
// characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

function isValid(s: string): boolean {
  // validar si el string no es par y retornar false
  let stack = []
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (map[char]) { // '(', ']' ....
    stack.push(map[char]) // [ '(' ]
  } else {
      if (char !== stack.pop()) {
        return false
      }
    }
  }

  return stack.length === 0
}

console.log(
  isValid('()')
)
console.log(
  isValid('()[]')
)
console.log(
  isValid('(]')
)
console.log(
  isValid('((])')
)
console.log(
  isValid('{[]}')
)






