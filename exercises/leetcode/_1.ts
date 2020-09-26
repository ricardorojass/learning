function twoSum(nums: number[], target: number): number[] {
  let numberIndex = new Map()

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    // guardamos el complemento que debe estar en numberIndex
    let complement = target - num
    if (numberIndex.has(complement)) {
      // Obtenemos el index del complement y y index actual
      return [numberIndex.get(complement), i]
    }

    // Guardamos cada numero y su index { 3: 0, 2: 1 }
    numberIndex.set(num, i)
  }
}

// Two pointers tecnique
// function twoSum(nums: number[], target: number): number[] {
//   let copy = [...nums]
//   let start = 0, end = nums.length - 1
//   copy.sort((a, b) => a - b)

//   while (start < end) {
//       const sum = copy[start] + copy[end]
//       if (sum == target) break

//       if (sum < target){
//         start++
//       } else {
//         end--
//       }
//   }

//   let res = []
//   // get the index by comparing the sorted array with original array
//   for (let i = 0; i < nums.length; i++) {
//     if (copy[start] == nums[i]) {
//       res.push(i)
//     } else if (copy[end] == nums[i]) res.push(i,)
//   }
//   return res
// }


console.log(
  twoSum([1, 2, 3, 4, 6], 6)[0] == 1 && twoSum([1, 2, 3, 4, 6], 6)[1] == 3
)

console.log(
  twoSum([2, 5, 9, 11],11)[0] == 0 && twoSum([2,5,9,11], 11)[1] == 2
)

console.log(
  twoSum([3,2,4],6)[0] == 1 && twoSum([3,2,4],6)[1] == 2
)

console.log(
  twoSum([3,3],6)[0] == 0 && twoSum([3,3],6)[1] == 1
)
