=begin
  You are given an integer array nums consisting of n elements,
  and an integer k.

  Find a contiguous subarray whose length is equal to k
  that has the maximum average value and return this value.
  Any answer with a calculation error less than 10-5 will be accepted.
=end

def find_max_average(nums, k)
  sum = nums[0...k].sum
  max_avg = sum.to_f / k

  (k...nums.length).each do |i|
    sum += nums[i] - nums[i - k]
    avg = sum.to_f / k
    max_avg = [max_avg, avg].max
    i += 1
  end

  max_avg
end

p find_max_average([1, 12, -5, -6, 50, 3], 4) == 12.75000
