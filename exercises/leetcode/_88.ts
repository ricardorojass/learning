// Merge sorted array

/**
  Do not return anything, modify nums1 in-place instead.
 */
// function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
//   let first = m - 1
//   let second = n - 1

//   for (let i = m + n - 1; i >= 0; i--) {
//     if (second < 0) break

//     if (nums1[first] > nums2[second]) {
//       nums1[i] = nums1[first]
//       first--
//     } else {
//       nums1[i] = nums2[second]
//       second--
//     }
//   }

//   return nums1
// }

function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
  let first = 0
  let second = 0

  while (first < m + n && second < n) {

    if (nums1[first] < nums2[second]) {
      if (nums1[first] == 0) {
        nums1[first] = nums2[second]
        second++
      }
      first++
    } else {
      move(nums1, first ,m)

      nums1[first] = nums2[second]
      first++
      second++
    }
  }

  return nums1
}

function move(arr: number[], first: number, m: number) {
  let prev = arr[first]
  for (let next = first + 1; next <= m; next++) {
    let temp = arr[next]
    arr[next] = prev
    prev = temp
  }
}

console.log(
  merge([1,2,3,0,0,0], 3, [2,5,6], 3)
)
console.log(
  merge([4,5,6,0,0,0], 3, [1,2,3], 3), [1,2,3,4,5,6]
)
