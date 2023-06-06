# O(n) time | O(1) space
def longest_ones(nums, k)
  left = right = curr = ans = 0

  (0...nums.length).each do |right|

    if (nums[right] == 0)
      curr += 1
    end

    while (curr > k)
      if (nums[left] == 0)
        curr -= 1
      end
      left += 1
    end

    ans = [ans, right - left + 1].max
  end

  return ans
end

p longest_ones([1,1,1,0,0,0,1,1,1,1,0], 2)