// Input: paths =
// [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo"


function destCity(paths: string[][]): string {
  let result: string
  let set = new Set()

  for (let i = 0; i < paths.length; i++) {
    set.add(paths[i][0])
  }

  for (let i = 0; i < paths.length; i++) {
    if (!set.has(paths[i][1])) {
      result = paths[i][1]
      break
    }
  }
  return result
};


console.log(
  destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]) ===
  "Sao Paulo"
)

console.log(
  destCity([["B","C"],["D","B"],["C","A"]]) ===
  "A"
)

console.log(
  destCity([["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]) ===
  "wxAscRuzOl"
)