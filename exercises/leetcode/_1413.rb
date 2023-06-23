# @param {Integer[]} nums
# @return {Integer}
def min_start_value(nums)
  start_value = 1
  current_sum = start_value

  for num in nums
    current_sum += num
    if (current_sum < 1)
      start_value += 1 - current_sum
      current_sum = 1
    end
  end

  start_value
end

p min_start_value([-3,2,-3,4,2])
p min_start_value([1,2])
p min_start_value([-3,2,-3,4,2])