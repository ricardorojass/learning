# @param {Integer[]} nums
# @return {Integer[]}
def running_sum(nums)
  prefix = [nums[0]]

  (1..nums.length - 1).each do |i|
    prefix << nums[i] + prefix[-1]
  end

  prefix
end

p running_sum([1,2,3,4])