// Merge sorted array

/**
  Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {

  let num1 = nums1[m-m]
  let num2 = nums2[n-n]

  while (num1 <= num2) {
    nums1.push(num2)
  }
  return nums1
}

console.log(
  merge([1,2,3,0,0,0], 3, [2,5,6], 3)
)


const nums1 = [1,2,3,0,0,0]
console.log(nums1.slice(1, 2));
