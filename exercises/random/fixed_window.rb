=begin
  Example 4: Given an integer array nums and an integer k,
  find the sum of the subarray with the largest sum whose length is k.
=end

# O(n) time | O(1) space
def find_best_subarray(nums, k)
  curr = 0

  (0...k).each do |i|
    curr += nums[i]
  end

  ans = curr
  i = k
  while i < nums.length
    curr += nums[i] - nums[i - k]
    ans = [ans, curr].max
    i += 1
  end

  ans
end

p find_best_subarray([3,-1,4,12,-8,5,6], 4)