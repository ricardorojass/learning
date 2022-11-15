function mover(arr) {
  let prev = arr[0]
  for (let i=1; i < arr.length; i++) {
    let temp = arr[i]
    arr[i] = prev
    prev = temp
  }
  arr[0] = 0

  return arr
}

console.log(
  mover([1,2,3])
)