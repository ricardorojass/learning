require 'pry'

# @param {Integer[]} nums
# @return {Integer}
# O(n) time | O(1) space
def ways_to_split_array(nums)
  n = nums.length
  ans = 0
  total = nums.sum

  left_section = 0
  (n - 1).times do |i|
    left_section += nums[i]
    right_section = total - left_section
    ans += 1 if left_section >= right_section
  end

  ans
end

p ways_to_split_array([10,4,-8,7]) == 2