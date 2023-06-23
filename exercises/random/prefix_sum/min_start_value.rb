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
    p start_value
  end

  start_value
end

# p min_start_value([-3,2,-3,4,2])
# p min_start_value([1,2])
p min_start_value([1,-2,-3])
=begin
  [1,-2,-3]
  start_value = 1
  current_sum = 1
      current_sum    | start_value  | current_sum



  startValue 1
  [1,2]
  (1 +1) = 2
  (2 +2) = 4

  [-3,2,-3,4,2]
  startValue 1
  (1 -3) = -2
  ()
=end