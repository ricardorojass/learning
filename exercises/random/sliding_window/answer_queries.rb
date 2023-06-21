require 'minitest/autorun'

def answer_queries(nums, queries, limit)
  prefix = [nums[0]]

  (1..nums.length - 1).each do |i|
    prefix.append(nums[i] + prefix[-1])
  end
  # p prefix

  ans = []
  queries.each do |x, y|
    curr = prefix[y] - prefix[x] + nums[x]
    ans << (curr < limit)
  end

  return ans

end

p answer_queries([1, 6, 3, 2, 7, 2], [[0, 3], [2, 5], [2, 4]], 13)