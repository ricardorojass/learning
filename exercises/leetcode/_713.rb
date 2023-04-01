# https://leetcode.com/problems/subarray-product-less-than-k/

# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def num_subarray_product_less_than_k(nums, k)
  if (k <= 1)
      return 0
  end

  ans = left = 0
  right = 0
  curr = 1

  (0...nums.length).each do |right|
      curr *= nums[right]
      while (curr >= k)
          curr /= nums[left]
          left += 1
      end

      ans += right - left + 1
  end

  ans
end

p num_subarray_product_less_than_k([10,5,2,6], 100)