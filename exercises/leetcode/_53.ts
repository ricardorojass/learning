// Complexity O(N*K)
// function maxSubArrayOfSize(k: number, nums: number[]): number {
//   let maxSum = 0, windowSum = 0

//   for (let i = 0; i < nums.length - k; i++) {
//     windowSum = 0

//     for (let j = i; j < i + k; j++) {
//       windowSum += nums[j]
//     }
//     maxSum = Math.max(maxSum, windowSum)
//   }
//   return maxSum
// }

// Complexity O(N)
// function maxSubArrayOfSize(k: number, nums: number[]): number {
//   let maxSum = 0, windowSum = 0, windowStart = 0

//   for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
//     windowSum += nums[windowEnd]

//     if (windowEnd >= k - 1) {
//       maxSum = Math.max(maxSum, windowSum)
//       windowSum -= nums[windowStart]
//       windowStart++
//     }
//   }
//   return maxSum
// }

// console.log(
//   maxSubArrayOfSize(3, [2, 1, 5, 1, 3, 2], )
// )

//
function maxSubArray(nums: number[]): number {
  if (nums.length < 1) return 0
  if (nums.length == 1) return nums[0]

  const n = nums.length
  let maxSum = Number.MIN_SAFE_INTEGER
  let sum = 0

  for (let i = 0; i < n; i++) {
    sum = 0
    for (let j = i; j < n; j++) {
      sum += nums[j]
      maxSum = Math.max(sum, maxSum)
    }
  }
  return maxSum
}



console.log(
  maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
)
console.log(
  maxSubArray([1])
)
console.log(
  maxSubArray([0])
)
console.log(
  maxSubArray([-1])
)
console.log(
  maxSubArray([-2147483647])
)
console.log(
  maxSubArray([-2,1])
)
console.log(
  maxSubArray([-2,1])
)
console.log(
  maxSubArray([-2,-1])
)
