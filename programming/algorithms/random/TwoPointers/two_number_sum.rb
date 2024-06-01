
# O(n^2) | O(1) space
# def two_number_sum(arr, targetSum)
#   for i in 0..arr.length-1 do
#     first_num = arr[i]
#     for j in i+1..arr.length-1 do
#       second_num = arr[j]
#       if first_num + second_num == targetSum
#         return [first_num, second_num]
#       end
#     end
#   end
#   return []
# end

# O(n log n) time | O(1) space
def two_number_sum(arr, targetSum)
  arr.sort!
  left = 0
  right = arr.length - 1
  while left < right
    current_sum = arr[left] + arr[right]
    if current_sum == targetSum
      return [arr[left], arr[right]]
    elsif current_sum < targetSum
      left += 1
    else
      right -= 1
    end
  end
  return []
end

# O(n^2) time | O(n) space
# def two_number_sum(arr, targetSum)
#   arr.combination(2).find { |pair| pair.sum == targetSum } || []
# end

# O(n) time | O(n) space
# def two_number_sum(arr, targetSum)
#   nums = {}
#   arr.each do |num|
#     potential_match = targetSum - num
#     if nums.include?(potential_match)
#       return [targetSum - num, num]
#     else
#       nums[num] = true
#     end
#   end

#   return []
# end

p two_number_sum([3, 5, -4, 8, 11, 1, -1, 6], 13)